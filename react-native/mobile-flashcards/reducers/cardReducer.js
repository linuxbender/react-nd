import {CREATE_NEW_CARD_SUCCESS, SORT_CARDS_LIST_DESCENDING} from '../actions/cardActions';
import {T_Store} from '../utils/typeHelper';

const cardReducer = (state = T_Store.decks.questions, action) => {
    switch (action.type) {
        case CREATE_NEW_CARD_SUCCESS:
            return state;
        case SORT_CARDS_LIST_DESCENDING:
            return [...state.sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp))];
        default:
            return state;
    }
};

export default cardReducer;