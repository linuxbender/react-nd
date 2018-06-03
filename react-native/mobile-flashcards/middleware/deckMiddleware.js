import {
    CREATE_NEW_DECK_ERROR,
    CREATE_NEW_DECK_SUCCESS,
    CREATE_NEW_DECK,
    LOAD_DECKS, LOAD_DECKS_ERROR,
    LOAD_DECKS_SUCCESS,
    sortDecksListDescending, DELETE_DECK_SUCCESS, DELETE_DECK_ERROR, DELETE_DECK
} from '../actions/deckActions';
import {
    METHOD_GET_ITEM, METHOD_MERGE_ITEM,
    METHOD_SET_ITEM,
    storageRequest
} from '../actions/storageActions';
import {uuid} from '../utils/numberHelper';
import {T_Deck} from '../utils/typeHelper';

export const addNewDeck = ({dispatch}) => next => action => {
    next(action);

    if (action.type === CREATE_NEW_DECK) {
        let dtoData = Object.assign({}, T_Deck);
        dtoData.key = uuid();
        dtoData.title = action.data;
        dtoData.timestamp = Date.now();
        dtoData.deleted = false;
        dispatch(storageRequest(METHOD_SET_ITEM, dtoData, CREATE_NEW_DECK_SUCCESS, CREATE_NEW_DECK_ERROR));
    }

    if (action.type === CREATE_NEW_DECK_SUCCESS) {
        dispatch(sortDecksListDescending(action.data));
    }

    if (action.type === CREATE_NEW_DECK_ERROR) {
    }
};

export const getDecks = ({dispatch}) => next => action => {
    next(action);

    if (action.type === LOAD_DECKS) {
        dispatch(storageRequest(METHOD_GET_ITEM, action.data, LOAD_DECKS_SUCCESS, LOAD_DECKS_ERROR));
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
        let dtoData = Object.assign({}, action.data, {deleted: true});
        dispatch(storageRequest(METHOD_MERGE_ITEM, dtoData, DELETE_DECK_SUCCESS, DELETE_DECK_ERROR));
    }

    if (action.type === DELETE_DECK_SUCCESS) {
        dispatch(sortDecksListDescending(action.data));
    }

    if (action.type === DELETE_DECK_ERROR) {
    }
};

export const deckMiddleware = [addNewDeck, getDecks, deleteDeck];