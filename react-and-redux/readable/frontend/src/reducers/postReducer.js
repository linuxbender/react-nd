import * as types from '../actions';
import initialState from '../utils/initialState';

const postReducer = (state = initialState.post, action) => {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return action.data.filter(i => i.deletet !== true);
        case types.LOAD_POSTS_BY_CATEGORY_SUCCESS:
            return action.data;
        case types.CREATE_POST_SUCCESS:
            return [...state, action.data];
        case types.UPDATE_POST_SUCCESS:
            return [...state.filter(i => i.id !== action.data.id), action.data];
        case types.DELETE_POST_SUCCESS:
            return state.filter(i => i.id !== action.data.id);
        default:
            return state;
    }
};

export default postReducer;