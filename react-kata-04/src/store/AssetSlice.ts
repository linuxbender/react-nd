import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type Asset = {
    appName: string | "";
    roleName: string | "";
    asset: string | "";
    action: string | "";
    enabled: boolean | false;
};

const createInitAsset = (): Asset => ({
    appName: "",
    roleName: "",
    asset: "",
    action: "",
    enabled: false
});

export const AssetSlice = createSlice({
    name: 'asset',
    initialState: createInitAsset(),
    reducers: {
        UPDATE_ASSET_ACTION: (state, action: PayloadAction<Partial<Asset>>) => {
            return {...state, ...action.payload};
        }
    }
});

export const {UPDATE_ASSET_ACTION} = AssetSlice.actions;

export default AssetSlice.reducer;