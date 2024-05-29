import { useEffect, useState } from "react";
import api from "../api";


const UserList = () => {
    const [users,setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            console.log(response);
            setUsers(response.data);
        } catch (error) {
            console.error('Erro ao obter usuários:', error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <h1>Lista de Usuários</h1>
            <ul>
                {users.map(users => (
                    <li key={users.id}>{users.name}</li>
                ))}
            </ul>
        </>
    );
}

export default UserList;