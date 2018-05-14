import * as types from './';
import {getAllPosts, getPostsByCategorie} from '../api';
import {beginApiCall} from "./apiStatusActions";

const loadPostsSuccess = (data = {}) => {
    return {type: types.LOAD_POSTS_SUCCESS, data};
};

const loadPostsByCategorySuccess = (data = {}) => {
    return {type: types.LOAD_POSTS_BY_CATEGORY_SUCCESS, data};
};

export const loadPosts = () => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return getAllPosts().then(data => {
            dispatch(loadPostsSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};

export const loadPostsByCategory = (category) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return getPostsByCategorie(category).then(data => {
            dispatch(loadPostsByCategorySuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};

