import {
    CREATE_DECK_ERROR,
    CREATE_NEW_DECK_SUCCESS,
    CREATE_NEW_DECK,
    LOAD_DECKS, LOAD_DECKS_ERROR,
    LOAD_DECKS_SUCCESS,
    sortDecksListDescending
} from '../actions/deckActions';
import {METHOD_GET_ITEM, METHOD_MERGE_ITEM, storageRequest} from '../actions/storageActions';
import {uuid} from '../utils/numberHelper';
import {T_Deck} from '../utils/typeHelper';

export const addNewDeck = ({dispatch}) => next => action => {
    next(action);

    if (action.type === CREATE_NEW_DECK) {
        const dtoData = Object.assign({}, T_Deck, {title: action.data, key: uuid(), timestamp: Date.now()});
        dispatch(storageRequest(METHOD_MERGE_ITEM, dtoData, CREATE_NEW_DECK_SUCCESS, CREATE_DECK_ERROR));
    }

    if (action.type === CREATE_NEW_DECK_SUCCESS) {
        dispatch(sortDecksListDescending(action.data));
    }

    if (action.type === CREATE_DECK_ERROR) {
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

export const deckMiddleware = [addNewDeck, getDecks];