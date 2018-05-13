import * as types from '../actions';
import initialState from './initialState';

const commentReducer = (state = initialState.comment, action) => {
    switch (action.type) {
        case types.LOAD_COMMENTS_SUCCESS:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};

export default commentReducer;