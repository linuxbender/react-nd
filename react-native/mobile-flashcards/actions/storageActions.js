import * as T from './actionNames';


export const METHOD_MERGE_ITEM = 'mergeItem';
export const METHOD_GET_ITEM = 'getItem';

export const storageRequest = (method, data, onSuccess, onError) => ({
    type: T.STORAGE_REQUEST,
    data,
    meta: { method, onSuccess, onError }
});