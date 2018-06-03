export const STORAGE_REQUEST = 'STORAGE_REQUEST';
export const METHOD_READ_ALL_DECKS = 'METHOD_READ_ALL_DECKS';
export const METHOD_ADD_DECK = 'METHOD_ADD_DECK';
export const METHOD_REMOVE_DECK = 'METHOD_REMOVE_DECK';
export const METHOD_ADD_CARD = 'METHOD_ADD_CARD';

export const storageRequest = (method, data, onSuccess, onError) => ({
    type: STORAGE_REQUEST,
    data,
    meta: {method, onSuccess, onError}
});