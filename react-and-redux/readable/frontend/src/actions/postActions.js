import * as types from './';
import {createPost, deletePostById, getAllPosts, getPostsByCategorie} from '../api';
import {beginApiCall} from './apiStatusActions';

const loadPostsSuccess = data => {
    return {type: types.LOAD_POSTS_SUCCESS, data};
};

const loadPostsByCategorySuccess = data => {
    return {type: types.LOAD_POSTS_BY_CATEGORY_SUCCESS, data};
};

const createPostSuccess = data => {
    return {type: types.CREATE_POST_SUCCESS, data};
};

const deletePostSuccess = data => {
  return {type: types.DELETE_POST_SUCCESS, data};
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

export const loadPostsByCategory = category => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return getPostsByCategorie(category).then(data => {
            dispatch(loadPostsByCategorySuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};

export const createNewPost = post => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return createPost(post).then(data => {
            dispatch(createPostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};

export const deletePost = id => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return deletePostById(id).then(data => {
            dispatch(deletePostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};

