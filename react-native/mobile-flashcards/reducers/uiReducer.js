import * as T from '../actions/actionNames';
import {T_Store} from '../utils/typeHelper';

const uiReducer = (state = T_Store.ui, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default uiReducer;