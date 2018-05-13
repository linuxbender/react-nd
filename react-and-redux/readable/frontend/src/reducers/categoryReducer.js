import * as types from '../actions';
import initialState from './initialState';

export default function categoryReducer(state = initialState.category, action) {
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
