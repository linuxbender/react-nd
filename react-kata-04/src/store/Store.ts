import {configureStore} from '@reduxjs/toolkit'
import assetReducer from './AssetSlice';

export const Store = configureStore({
    reducer: {
        asset: assetReducer,
    },
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch