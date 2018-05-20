import {
    createPost,
    deletePostById,
    getAllPosts,
    getPostsByCategorie,
    updatePost,
    upDownPost,
    upVotePost
} from '../api/readableApi';
import * as T from './actionNames';
import {beginApiCall} from './apiStatusActions';

const loadPostsSuccess = data => {
    return {type: T.LOAD_POSTS_SUCCESS, data};
};

const loadPostsByCategorySuccess = data => {
    return {type: T.LOAD_POSTS_BY_CATEGORY_SUCCESS, data};
};

const createPostSuccess = data => {
    return {type: T.CREATE_POST_SUCCESS, data};
};

const deletePostSuccess = data => {
    return {type: T.DELETE_POST_SUCCESS, data};
};

const updatePostSuccess = data => {
    return {type: T.UPDATE_POST_SUCCESS, data};
};

const updatePostUpVoteSuccess = data => {
    return {type: T.UPDATE_POST_UP_VOTE_SUCCESS, data};
};

const updatePostDownVoteSuccess = data => {
    return {type: T.UPDATE_POST_DOWN_VOTE_SUCCESS, data};
};

export const updatePostDownVote = id => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return upDownPost(id).then(data => {
            dispatch(updatePostDownVoteSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};


export const updatePostUpVote = id => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return upVotePost(id).then(data => {
            dispatch(updatePostUpVoteSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
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

export const editPost = (post) => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return updatePost(post).then(data => {
            dispatch(updatePostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};
