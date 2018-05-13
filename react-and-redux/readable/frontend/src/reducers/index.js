import {combineReducers} from 'redux';

import category from './categoryReducer';
import post from './postReducer';
import apiStatusReducer from './apiStatusReducer';

const rootReducer = combineReducers({apiStatusReducer, post, category});

export default rootReducer;