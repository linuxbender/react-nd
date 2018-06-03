import {
    CREATE_NEW_DECK_SUCCESS,
    DELETE_DECK_SUCCESS,
    LOAD_DECKS_SUCCESS,
    SORT_DECKS_LIST_DESCENDING
} from '../actions/deckActions';
import {T_Store} from '../utils/typeHelper';

const deckReducer = (state = T_Store.decks, action) => {
    switch (action.type) {
        case LOAD_DECKS_SUCCESS:
            return action.data;
        case CREATE_NEW_DECK_SUCCESS:
            return [...state, action.data];
        case DELETE_DECK_SUCCESS:
            return state.filter(i => i.key !== action.data.key);
        case SORT_DECKS_LIST_DESCENDING:
            return [...state.sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp))];
        default:
            return state;
    }
};

export default deckReducer;