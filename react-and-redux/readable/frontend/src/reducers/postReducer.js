import * as T from '../actions/actionNames';
import {T_Store} from '../utils/typeHelper';

const postReducer = (state = T_Store.post, action) => {
    switch (action.type) {
        case T.LOAD_POSTS_SUCCESS:
            return action.data.filter(i => i.deletet !== true);
        case T.LOAD_POSTS_BY_CATEGORY_SUCCESS:
            return action.data;
        case T.CREATE_POST_SUCCESS:
            return [...state, action.data];
        case T.UPDATE_POST_SUCCESS:
            return [...state.filter(i => i.id !== action.data.id), action.data];
        case T.DELETE_POST_SUCCESS:
            return state.filter(i => i.id !== action.data.id);
        case T.UPDATE_POST_UP_VOTE_SUCCESS:
            return [...state.filter(i => i.id !== action.data.id), action.data];
        default:
            return state;
    }
};

export default postReducer;