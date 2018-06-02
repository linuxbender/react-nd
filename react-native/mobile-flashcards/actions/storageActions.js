export const STORAGE_REQUEST = 'STORAGE_REQUEST';
export const METHOD_MERGE_ITEM = 'mergeItem';
export const METHOD_GET_ITEM = 'getItem';
export const METHOD_REMOVE_ITEM = 'removeItem';

export const storageRequest = (method, data, onSuccess, onError) => ({
    type: STORAGE_REQUEST,
    data,
    meta: { method, onSuccess, onError }
});