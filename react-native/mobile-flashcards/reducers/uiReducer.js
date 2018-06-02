import {HIDE_UI_LOADER, SHOW_UI_LOADER} from '../actions/uiActions';
import {T_Store} from '../utils/typeHelper';

const uiReducer = (state = T_Store.ui, action) => {
    switch (action.type) {
        case SHOW_UI_LOADER:
            return Object.assign({}, state, {isLoading: action.data});
        case HIDE_UI_LOADER:
            return Object.assign({}, state, {isLoading: action.data});
        default:
            return state;
    }
};

export default uiReducer;