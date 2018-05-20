import {createNewComment, deleteCommentById, getAllPostComments, readPostById} from '../api';
import {beginApiCall} from './apiStatusActions';
import * as T from './actionNames';

export const loadCommentsSuccess = (data = {}) => {
    return {type: T.LOAD_COMMENTS_SUCCESS, data};
};

export const readPostSuccess = data => {
    return {type: T.READ_POST_SUCCESS, data};
};

export const deleteCommentSuccess = data => {
    return {type: T.DELETE_COMMENT_SUCCESS, data};
};

export const createCommentSuccess = data => {
    return {type: T.CREATE_COMMENT_SUCCESS, data};
};

export const readPost = (id) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return readPostById(id).then(data => {
            dispatch(readPostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};

export const loadComments = (id) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return getAllPostComments(id).then(data => {
            dispatch(loadCommentsSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};

export const createComment = post => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return createNewComment(post).then(data => {
            dispatch(createCommentSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};

export const deleteComment = id => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return deleteCommentById(id).then(data => {
            dispatch(deleteCommentSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};
