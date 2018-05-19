import * as types from '../actions';
import initialState from '../utils/initialState';

const commentReducer = (state = initialState.comment, action) => {
    switch (action.type) {
        case types.LOAD_COMMENTS_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

export default commentReducer;