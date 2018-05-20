import * as T from './actionNames';

export const beginApiCall = () => {
    return {type: T.BEGIN_API_CALL};
};

export const apiCallError = () => {
    return {type: T.API_CALL_ERROR};
};
