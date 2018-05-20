import * as types from '../actions';
import {T_Store} from '../utils/typeHelper';

const navReducer = (state = T_Store.navActiveCategory, action) => {
    switch (action.type) {
        case types.NAV_ACTIVE_CATEGORY:
            return action.data;
        default:
            return state;
    }
};

export default navReducer;