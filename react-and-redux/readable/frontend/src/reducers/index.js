import {combineReducers} from 'redux';
import post from './postReducer';
import category from './categoryReducer';

const rootReducer = combineReducers({post, category});

export default rootReducer;