import type {Asset} from "@/types/role/Asset.ts";


export type RoleDetail = {
    id: number;
    name: string;
    application: string;
    assets: Asset[];
}