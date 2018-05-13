import {combineReducers} from 'redux';

import category from './categoryReducer';
import post from './postReducer';
import apiStatusReducer from './apiStatusReducer';
import commentReducer from './commentReducer';
import navReducer from './navReducer';

const rootReducer = combineReducers({navReducer, commentReducer, apiStatusReducer, post, category});

export default rootReducer;