import * as T from '../actions/actionNames';
import {T_Store} from '../utils/typeHelper';

const categoryReducer = (state = T_Store.category, action) => {
    switch (action.type) {
        case T.LOAD_CATEGORIES_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

export default categoryReducer;