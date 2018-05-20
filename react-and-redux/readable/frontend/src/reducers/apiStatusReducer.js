import * as T from '../actions/actionNames';
import {T_Store} from '../utils/typeHelper';

const actionTypeEndsInSuccess = (type) => {
    return type.substring(type.length - 8) === '_SUCCESS';
};

const apiStatusReducer = (state = T_Store.apiCallsInProgress, action) => {
    if (action.type === T.BEGIN_API_CALL) {
        return state + 1;
    } else if (action.type === T.API_CALL_ERROR ||
        actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
};

export default apiStatusReducer;