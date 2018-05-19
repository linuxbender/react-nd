import {combineReducers} from 'redux';

import category from './categoryReducer';
import post from './postReducer';
import apiCallsInProgress from './apiStatusReducer';
import detail from './detailReducer';
import navActiveCategory from './navReducer';

const rootReducer = combineReducers({navActiveCategory, detail, apiCallsInProgress, post, category});

export default rootReducer;