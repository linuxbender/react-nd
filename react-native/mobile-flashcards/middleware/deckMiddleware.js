import {
    CREATE_NEW_DECK,
    CREATE_NEW_DECK_ERROR,
    CREATE_NEW_DECK_SUCCESS,
    DELETE_DECK,
    DELETE_DECK_ERROR,
    DELETE_DECK_SUCCESS,
    LOAD_DECKS,
    LOAD_DECKS_ERROR,
    LOAD_DECKS_SUCCESS,
    loadDecks,
    sortDecksListDescending
} from '../actions/deckActions';
import {METHOD_ADD_DECK, METHOD_READ_ALL_DECKS, METHOD_REMOVE_DECK, storageRequest} from '../actions/storageActions';
import {uuid} from '../utils/numberHelper';
import {T_Deck} from '../utils/typeHelper';

export const addNewDeck = ({dispatch}) => next => action => {
    next(action);
    if (action.type === CREATE_NEW_DECK) {
        let dtoData = {...T_Deck, key: uuid(), title: action.data, timestamp: new Date()};
        dispatch(storageRequest(METHOD_ADD_DECK, dtoData, CREATE_NEW_DECK_SUCCESS, CREATE_NEW_DECK_ERROR));
    }

    if (action.type === CREATE_NEW_DECK_SUCCESS) {
        dispatch(loadDecks());
    }

    if (action.type === CREATE_NEW_DECK_ERROR) {
    }
};

export const getDecks = ({dispatch}) => next => action => {
    next(action);

    if (action.type === LOAD_DECKS) {
        dispatch(storageRequest(METHOD_READ_ALL_DECKS, action.data, LOAD_DECKS_SUCCESS, LOAD_DECKS_ERROR));
    }

    if (action.type === LOAD_DECKS_SUCCESS) {
        dispatch(sortDecksListDescending(action.data));
    }

    if (action.type === LOAD_DECKS_ERROR) {
    }
};

export const deleteDeck = ({dispatch}) => next => action => {
    next(action);

    if (action.type === DELETE_DECK) {
        let dtoData = {...action.data};
        dispatch(storageRequest(METHOD_REMOVE_DECK, dtoData, DELETE_DECK_SUCCESS, DELETE_DECK_ERROR));
    }

    if (action.type === DELETE_DECK_SUCCESS) {
        dispatch(loadDecks());
    }

    if (action.type === DELETE_DECK_ERROR) {
    }
};

export const deckMiddleware = [addNewDeck, getDecks, deleteDeck];