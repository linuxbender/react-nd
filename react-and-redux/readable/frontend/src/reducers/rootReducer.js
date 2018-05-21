import {combineReducers} from 'redux';

import category from './categoryReducer';
import post from './postReducer';
import apiCallsInProgress from './apiStatusReducer';
import comment from './commentReducer';
import navActiveCategory from './navReducer';

const rootReducer = combineReducers({navActiveCategory, comment, apiCallsInProgress, post, category});

export default rootReducer;