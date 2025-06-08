import {useQuery} from "@tanstack/react-query";
import {useUserStore} from "@/state/userStore.ts";
import {getUsers} from "@/api/User.ts";
import Loading from "@/components/Loading.tsx";


export const ReactQueryZustandPage = () => {

    const {filters} = useUserStore();

    const {data, isLoading} = useQuery({
        queryKey: ['users', filters],
        queryFn: () => getUsers(filters),
    })

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div>
            <h1>React Query + Zustand</h1>
            {data?.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
}