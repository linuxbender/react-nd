import * as types from '../actions';
import initialState from '../utils/initialState';

const navReducer = (state = initialState.navActiveCategory, action) => {
    switch (action.type) {
        case types.NAV_ACTIVE_CATEGORY:
            return action.data;
        default:
            return state;
    }
};

export default navReducer;