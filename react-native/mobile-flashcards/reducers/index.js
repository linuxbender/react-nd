import {combineReducers} from 'redux';
import deckReducer from './deckReducer';
import quizReducer from './quizReducer';
import uiReducer from './uiReducer';

export const reducers = combineReducers({
    decks: deckReducer,
    ui: uiReducer,
    quiz: quizReducer
});

export default reducers;