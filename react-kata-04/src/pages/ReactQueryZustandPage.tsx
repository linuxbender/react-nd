import {useQuery} from "@tanstack/react-query";
import {getUsers} from "../api/User.ts";
import {useUserStore} from "../state/userStore.ts";
import type {User} from "../types/User.ts";
import {useEffect} from "react";

export const ReactQueryZustandPage = () => {

    const {users, setUsers} = useUserStore();

    const {data} = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(),
    })

    useEffect(() => {
        if (data) {
            setUsers(data as User[]);
        }
    }, [data, setUsers]);

    return (
        <div>
            <h1>React Query + Zustand</h1>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
}