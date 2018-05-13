import * as types from './';
import {getAllCategories} from '../api';
import {beginApiCall} from "./apiStatusActions";
import {navActiveCategory} from "./navActions";

const loadCategoriesSuccess = (data) => {
    return {type: types.LOAD_CATEGORIES_SUCCESS, data};
};

export const loadCategories = () => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return getAllCategories().then(data => {
            dispatch(loadCategoriesSuccess(data));
            dispatch(navActiveCategory());
        }).catch(error => {
            throw(error);
        });
    };
};