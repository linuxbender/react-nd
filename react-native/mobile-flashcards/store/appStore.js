import {applyMiddleware, compose, createStore} from 'redux'
import {cardMiddleware} from '../middleware/cardMiddleware';
import {deckMiddleware} from '../middleware/deckMiddleware';
import {loggerMiddleware} from '../middleware/loggerMiddleware';
import {storageMiddleware} from '../middleware/storageMiddleware';
import {uiMiddleware} from '../middleware/uiMiddleware';

import rootReducer from '../reducers';
import {T_Store} from '../utils/typeHelper';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (defaultState = T_Store) => {
    return createStore(
        rootReducer,
        defaultState,
        composeEnhancers(applyMiddleware(...loggerMiddleware, ...deckMiddleware, ...cardMiddleware, ...uiMiddleware, ...storageMiddleware))
    );
};

export default configureStore;