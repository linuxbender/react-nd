import {
    createNewComment,
    deleteCommentById, downVoteComment,
    getAllPostComments,
    updateCommentById, upVoteComment
} from '../api/readableApi';
import {beginApiCall} from './apiStatusActions';
import * as T from './actionNames';
import {loadPosts} from './postActions';

export const loadCommentsSuccess = (data = {}) => {
    return {type: T.LOAD_COMMENTS_SUCCESS, data};
};

export const deleteCommentSuccess = data => {
    return {type: T.DELETE_COMMENT_SUCCESS, data};
};

export const createCommentSuccess = data => {
    return {type: T.CREATE_COMMENT_SUCCESS, data};
};

export const updateCommentSuccess = data => {
    return {type: T.UPDATE_COMMENT_SUCCESS, data};
};

export const resetDetail = (data) => {
    return {type: T.RESET_DETAIL, data};
};

export const sortCommentsByBestScore = (data = '') => {
    return {type: T.SORT_COMMENTS_BY_BEST_SCORE, data};
};

export const sortCommentsByLowestScore = (data = '') => {
    return {type: T.SORT_COMMENTS_BY_LOWEST_SCORE, data};
};

export const updateCommentUpVoteSuccess = data => {
    return {type: T.UPDATE_COMMENT_UP_VOTE_SUCCESS, data};
};

export const updateCommentDownVoteSuccess = data => {
    return {type: T.UPDATE_COMMENT_DOWN_VOTE_SUCCESS, data};
};

export const loadComments = (id) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return getAllPostComments(id).then(data => {
            dispatch(loadCommentsSuccess(data));
        });
    };
};

export const createComment = post => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return createNewComment(post).then(data => {
            dispatch(createCommentSuccess(data));
            dispatch(loadPosts());
        });
    };
};

export const updateComment = comment => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return updateCommentById(comment).then(data => {
            dispatch(updateCommentSuccess(data));
            dispatch(loadPosts());
        });
    };
};

export const deleteComment = id => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return deleteCommentById(id).then(data => {
            dispatch(deleteCommentSuccess(data));
            dispatch(loadPosts());
        });
    };
};

export const updateCommentDownVote = id => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return downVoteComment(id).then(data => {
            dispatch(updateCommentDownVoteSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};


export const updateCommentUpVote = id => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return upVoteComment(id).then(data => {
            dispatch(updateCommentUpVoteSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};