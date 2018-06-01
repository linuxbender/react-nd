import {combineReducers} from 'redux';
import deckReducer from './deckReducer';

export const reducers = combineReducers({
    decks: deckReducer,
});
export default deckReducer;
