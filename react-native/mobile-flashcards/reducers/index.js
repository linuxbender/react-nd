import {LOAD_DECKS, UPDATE_DECK,} from '../actions'

const decks = (state = {}, action) => {
    switch (action.type) {
        case LOAD_DECKS:
            return {
                ...state,
                ...action.decks,
            };
        case UPDATE_DECK:
            return {
                ...state,
                ...action.updatedDeck,
            };
        default:
            return state
    }
};

export default decks
