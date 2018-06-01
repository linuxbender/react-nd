import {applyMiddleware, compose, createStore} from 'redux'
import {deckMiddleware} from '../middleware/deck';

import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (defaultState) => {
    return createStore(
        rootReducer,
        defaultState,
        composeEnhancers(applyMiddleware(...deckMiddleware))
    );
};

export default configureStore;