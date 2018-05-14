import * as types from '../actions';
import initialState from '../utils/initialState';

const categoryReducer = (state = initialState.category, action) => {
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

export default categoryReducer;