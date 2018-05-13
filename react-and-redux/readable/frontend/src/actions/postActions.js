import * as types from './';
import {getAllPosts} from '../api';

export function loadPostsSuccess(data) {
    return {type: types.LOAD_POSTS_SUCCESS, data};
}

export function loadPosts() {
    return function (dispatch) {
        // dispatch(beginAjaxCall());
        return getAllPosts().then(data => {
            dispatch(loadPostsSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}
