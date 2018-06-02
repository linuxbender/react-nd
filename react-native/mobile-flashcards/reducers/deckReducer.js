import * as T from '../actions/actionNames';
import {T_Store} from '../utils/typeHelper';

const deckReducer = (state = T_Store.decks, action) => {
    switch (action.type) {
        case T.LOAD_DECKS_SUCCESS:
            return action.data;
        case T.CREATE_DECK_SUCCESS:
            return [...state, action.data];
        case T.UPDATE_DECK_SUCCESS:
            return [...state.filter(i => i.key !== action.data.key), action.data];
        case T.DELETE_DECK_SUCCESS:
            return state.filter(i => i.key !== action.data.key);
        default:
            return state;
    }
};

export default deckReducer;