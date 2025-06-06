import {create} from "zustand/react";
import type {GetUserFilters} from "@/api/User";

type UserStore = {
    filters?: GetUserFilters;
    setFilters: (filters?: GetUserFilters) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    filters: undefined,
    setFilters: (filters?: GetUserFilters) => set({filters}),
}));