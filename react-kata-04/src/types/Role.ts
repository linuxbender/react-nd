import type {Asset} from "./Assets.ts";

export type Role = {
    id: number;
    application: string;
    assets: Asset[];
}