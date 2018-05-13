import * as types from '../actions';
import initialState from './initialState';

export default function postReducer(state = initialState.post, action) {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
