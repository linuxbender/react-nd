export const CREATE_NEW_CARD_SUCCESS = 'CREATE_NEW_CARD_SUCCESS';
export const CREATE_NEW_CARD_ERROR = 'CREATE_NEW_CARD_ERROR';
export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';

export const SORT_CARDS_LIST_DESCENDING = 'SORT_CARDS_LIST_DESCENDING';

export const createNewCard = data => ({ type: CREATE_NEW_CARD, data});
export const sortCardsListDescending = data => ({type: SORT_CARDS_LIST_DESCENDING, data});