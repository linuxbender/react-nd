import * as types from '../actions';
import initialState from './initialState';

const postReducer = (state = initialState.post, action) => {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

export default postReducer;