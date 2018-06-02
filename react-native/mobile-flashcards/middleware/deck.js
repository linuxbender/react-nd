import * as T from '../actions/actionNames';
import {METHOD_GET_ITEM, METHOD_MERGE_ITEM, storageRequest} from '../actions/storageActions';
import {uuid} from '../utils/numberHelper';
import {T_Deck} from '../utils/typeHelper';

export const addNewDeck = ({dispatch}) => next => action => {
    next(action);

    if (action.type === T.CREATE_NEW_DECK) {
        const data = Object.assign({}, T_Deck, {title: action.data, key: uuid(), timestamp: Date.now()});
        dispatch(storageRequest(METHOD_MERGE_ITEM, data, T.CREATE_DECK_SUCCESS, T.CREATE_DECK_ERROR));
        //dispatch(showSpinner());
    }

    if (action.type === T.CREATE_DECK_ERROR) {
        //dispatch(hideSpinner());
    }
    if (action.type === T.CREATE_DECK_SUCCESS) {
        //dispatch(hideSpinner());
    }
};

export const getDecks = ({dispatch}) => next => action => {
    next(action);

    if (action.type === T.LOAD_DECKS) {
        dispatch(storageRequest(METHOD_GET_ITEM, action.data, T.LOAD_DECKS_SUCCESS, T.CREATE_DECK_ERROR));
        //dispatch(hideSpinner());
    }
};

export const deckMiddleware = [addNewDeck, getDecks];