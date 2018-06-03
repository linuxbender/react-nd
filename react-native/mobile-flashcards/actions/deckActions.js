// decks
export const LOAD_DECKS_SUCCESS = 'LOAD_DECKS_SUCCESS';
export const LOAD_DECKS_ERROR = 'LOAD_DECKS_ERROR';
export const LOAD_DECKS = 'LOAD_DECKS';

export const CREATE_NEW_DECK_SUCCESS = 'CREATE_NEW_DECK_SUCCESS';
export const CREATE_NEW_DECK_ERROR = 'CREATE_NEW_DECK_ERROR';
export const CREATE_NEW_DECK = 'CREATE_NEW_DECK';

export const DELETE_DECK_SUCCESS = 'DELETE_DECK_SUCCESS';
export const DELETE_DECK_ERROR = 'DELETE_DECK_ERROR';
export const DELETE_DECK = 'DELETE_DECK';

export const SORT_DECKS_LIST_DESCENDING = 'SORT_DECKS_LIST_DESCENDING';

export const createNewDeck = data => ({ type: CREATE_NEW_DECK, data});
export const loadDecks = data => ({type: LOAD_DECKS, data});
export const deleteDeck = data => ({type: DELETE_DECK, data});
export const sortDecksListDescending = data => ({type: SORT_DECKS_LIST_DESCENDING, data});