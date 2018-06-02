export const loaderHandler = ({dispatch}) => next => action => {
    next(action);
    // todo
};

export const toastHandler = ({dispatch}) => next => action => {
    next(action);
    // todo
};

export const uiMiddleware = [loaderHandler, toastHandler];