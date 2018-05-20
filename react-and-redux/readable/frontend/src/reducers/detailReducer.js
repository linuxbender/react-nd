import * as types from '../actions';
import {T_Store} from '../utils/typeHelper';

const detailReducer = (state = T_Store.detail, action) => {
    switch (action.type) {
        case types.READ_POST_SUCCESS:
            return Object.assign({}, state, {
                post: action.data
            });
        case types.LOAD_COMMENTS_SUCCESS:
            return Object.assign({}, state, {
                comment: action.data
            });
        case types.DELETE_COMMENT_SUCCESS:
            return Object.assign({}, state, {
                comment: state.comment.filter(i => i.id !== action.data.id)
            });
        case types.CREATE_COMMENT_SUCCESS:
            return Object.assign({}, state, {
                comment: [...state.comment, action.data]
            });
        default:
            return state;
    }
};

export default detailReducer;