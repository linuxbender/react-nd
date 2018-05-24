import * as T from '../actions/actionNames';
import {T_Store} from '../utils/typeHelper';

const commentReducer = (state = T_Store.comment, action) => {
    switch (action.type) {
        case T.LOAD_COMMENTS_SUCCESS:
            return action.data.sort((a, b) => b.timestamp - a.timestamp);
        case T.DELETE_COMMENT_SUCCESS:
            return state.filter(i => i.id !== action.data.id).sort((a, b) => b.timestamp - a.timestamp);
        case T.CREATE_COMMENT_SUCCESS:
            return [...state, action.data].sort((a, b) => b.timestamp - a.timestamp);
        case T.UPDATE_COMMENT_SUCCESS:
            return [...state.filter(i => i.id !== action.data.id), action.data].sort((a, b) => b.timestamp - a.timestamp);
        case T.UPDATE_COMMENT_UP_VOTE_SUCCESS:
            return [...state.filter(i => i.id !== action.data.id), action.data].sort((a, b) => b.timestamp - a.timestamp);
        case T.UPDATE_COMMENT_DOWN_VOTE_SUCCESS:
            return [...state.filter(i => i.id !== action.data.id), action.data].sort((a, b) => b.timestamp - a.timestamp);
        case T.SORT_COMMENTS_BY_BEST_SCORE:
            return [...state.filter(i => i).sort((a, b) => b.voteScore - a.voteScore)].sort((a, b) => b.timestamp - a.timestamp);
        case T.SORT_COMMENTS_BY_LOWEST_SCORE:
            return [...state.filter(i => i).sort((a, b) => a.voteScore - b.voteScore)].sort((a, b) => b.timestamp - a.timestamp);
        default:
            return state;
    }
};

export default commentReducer;