import * as types from './';
import {getAllPostComments, readPostById} from '../api';
import {beginApiCall} from './apiStatusActions';
import * as T from './index';

export const loadCommentsSuccess = (data = {}) => {
    return {type: types.LOAD_COMMENTS_SUCCESS, data};
};

const readPostSuccess = data => {
    return {type: T.READ_POST_SUCCESS, data};
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