import * as T from '../actions/actionNames';
import {T_Deck} from '../utils/typeHelper';

export const loaderHandler = ({dispatch}) => next => action => {
    next(action);
    // todo
};

export const toastHandler = ({dispatch}) => next => action => {
    next(action);
    // todo
};


export const uiMiddleware = [loaderHandler, toastHandler];