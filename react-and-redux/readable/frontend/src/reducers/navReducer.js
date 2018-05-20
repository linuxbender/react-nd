import * as T from '../actions/actionNames';
import {T_Store} from '../utils/typeHelper';

const navReducer = (state = T_Store.navActiveCategory, action) => {
    switch (action.type) {
        case T.NAV_ACTIVE_CATEGORY:
            return action.data;
        default:
            return state;
    }
};

export default navReducer;