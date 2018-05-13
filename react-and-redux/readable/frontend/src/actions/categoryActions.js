import * as types from './';
import {getAllCategories} from '../api';
import {beginApiCall} from "./apiStatusActions";

const loadCategoriesSuccess = (data) => {
    return {type: types.LOAD_CATEGORIES_SUCCESS, data};
};

export const loadCategories = () => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return getAllCategories().then(data => {
            dispatch(loadCategoriesSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
};