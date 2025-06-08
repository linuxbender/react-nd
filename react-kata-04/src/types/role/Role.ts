import type {RoleDetail} from "@/types/role/RoleDetail.ts";

export type Role = {
    id: number;
    application: string;
    assets: RoleDetail[];
}