import {combineReducers} from 'redux';
import deckReducer from './deckReducer';
import uiReducer from './uiReducer';

export const reducers = combineReducers({
    decks: deckReducer,
    ui: uiReducer
});

export default reducers;