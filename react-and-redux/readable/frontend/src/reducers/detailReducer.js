import * as T from '../actions/actionNames';
import {T_Detail, T_Store} from '../utils/typeHelper';

const detailReducer = (state = T_Store.detail, action) => {
    switch (action.type) {
        case T.RESET_DETAIL: {
            return Object.assign({}, state, {
                post: T_Detail
            });
        }
        case T.READ_POST_SUCCESS:
            return Object.assign({}, state, {
                post: action.data
            });
        case T.LOAD_COMMENTS_SUCCESS:
            return Object.assign({}, state, {
                comment: action.data
            });
        case T.DELETE_COMMENT_SUCCESS:
            return Object.assign({}, state, {
                comment: state.comment.filter(i => i.id !== action.data.id)
            });
        case T.CREATE_COMMENT_SUCCESS:
            return Object.assign({}, state, {
                comment: [...state.comment, action.data]
            });
        default:
            return state;
    }
};

export default detailReducer;