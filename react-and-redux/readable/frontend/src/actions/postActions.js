import * as types from './';
import {getAllPosts} from '../api';
import {beginApiCall} from "./apiStatusActions";

const loadPostsSuccess = (data) => {
    return {type: types.LOAD_POSTS_SUCCESS, data};
};

export const loadPosts = () => {
    return function (dispatch) {
        dispatch(beginApiCall());
        return getAllPosts().then(data => {
            dispatch(loadPostsSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};
