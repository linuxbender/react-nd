import * as types from './';
import {getAllPostComments} from "../api";
import {beginApiCall} from "./apiStatusActions";

export const loadCommentsSuccess = (data) => {
    return {type: types.LOAD_COMMENTS_SUCCESS, data};
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