import * as types from './';
import {getAllCategories} from '../api';

export function loadCategoriesSuccess(data) {
    return {type: types.LOAD_CATEGORIES_SUCCESS, data};
}

export function loadCategories() {
    return function (dispatch) {
        // dispatch(beginAjaxCall());
        return getAllCategories().then(data => {
            dispatch(loadCategoriesSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}
