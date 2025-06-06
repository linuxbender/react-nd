import type {User} from "@/types/User.ts";

export type GetUserFilters = {
    limit: number;
    page: number;
}

export const getUsers = async (_filters?: GetUserFilters): Promise<User[]> => {

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    return [{id: 1, name: 'John Doe'}] as User[];
}