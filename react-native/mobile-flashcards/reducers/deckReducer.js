import {
    CREATE_DECK_SUCCESS,
    DELETE_DECK_SUCCESS,
    LOAD_DECKS_SUCCESS,
    UPDATE_DECK_SUCCESS
} from '../actions/deckActions';
import {T_Store} from '../utils/typeHelper';

const deckReducer = (state = T_Store.decks, action) => {
    switch (action.type) {
        case LOAD_DECKS_SUCCESS:
            return action.data;
        case CREATE_DECK_SUCCESS:
            return [...state, action.data];
        case UPDATE_DECK_SUCCESS:
            return [...state.filter(i => i.key !== action.data.key), action.data];
        case DELETE_DECK_SUCCESS:
            return state.filter(i => i.key !== action.data.key);
        default:
            return state;
    }
};

export default deckReducer;