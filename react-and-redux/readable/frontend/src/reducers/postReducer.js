import * as T from '../actions/actionNames';
import {T_Store} from '../utils/typeHelper';

const postReducer = (state = T_Store.post, action) => {
    switch (action.type) {
        case T.LOAD_POSTS_SUCCESS:
            return action.data.filter(i => i.deletet !== true).sort((a, b) => b.timestamp - a.timestamp);
        case T.LOAD_POSTS_BY_CATEGORY_SUCCESS:
            return action.data.filter(i => i.deletet !== true).sort((a, b) => b.timestamp - a.timestamp);
        case T.CREATE_POST_SUCCESS:
            return [...state, action.data].sort((a, b) => b.timestamp - a.timestamp);
        case T.UPDATE_POST_SUCCESS:
            return [...state.filter(i => i.id !== action.data.id), action.data].sort((a, b) => b.timestamp - a.timestamp);
        case T.DELETE_POST_SUCCESS:
            return state.filter(i => i.id !== action.data.id).sort((a, b) => b.timestamp - a.timestamp);
        case T.UPDATE_POST_UP_VOTE_SUCCESS:
            return [...state.filter(i => i.id !== action.data.id), action.data].sort((a, b) => b.timestamp - a.timestamp);
        case T.UPDATE_POST_DOWN_VOTE_SUCCESS:
            return [...state.filter(i => i.id !== action.data.id), action.data].sort((a, b) => b.timestamp - a.timestamp);
        case T.SORT_POSTS_BY_BEST_SCORE:
            return [...state.filter(i => i).sort((a, b) => b.voteScore - a.voteScore)];
        case T.SORT_POST_BY_LOWEST_SCORE:
            return [...state.filter(i => i).sort((a, b) => a.voteScore - b.voteScore)];
        default:
            return state;
    }
};

export default postReducer;