import { useEffect, useState } from "react";
import api from "../api";
import UserForm from "./UserForm";


const UserList = () => {
    const [users,setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Erro ao obter usuários:', error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/users/${id}`);
            setUsers(users.filter(user=> user.id != id))
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    };

    const handleEdit = (user) => {
        
    }

    return (
        <>
            <h1>Lista de Usuários</h1>
            <UserForm fetchUsers={fetchUsers} />
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleEdit(user)}>Editar</button>
                        <button onClick={() => handleDelete(user.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserList;