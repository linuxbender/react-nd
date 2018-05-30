/*import {apiRequest} from "../actions/api";
import {FETCH_BOOKS_ERROR, FETCH_BOOKS_SUCCESS, GET_BOOKS, SELECT_BOOK, updateBooks} from "../actions/books";
import {createOrder} from "../actions/order";
import {hideSpinner, orderInProgress, showSpinner} from "../actions/ui";

const URL = 'https://www.googleapis.com/books/v1/volumes?q=react';

// this middleware only care about the getBooks action
export const getBooksFlow = ({dispatch}) => next => action => {
    next(action);

    if (action.type === GET_BOOKS) {
        dispatch(apiRequest('GET', URL, null, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR));
        dispatch(showSpinner());
    }

};

// on successful fetch, process the books data
export const processBooksCollection = ({dispatch}) => next => action => {
    next(action);

    if (action.type === FETCH_BOOKS_SUCCESS) {
        dispatch(updateBooks(action.payload.items));
        dispatch(hideSpinner())
    }
};

// notify about an order in progress, dispatch an order event
export const selectBookFlow = ({dispatch}) => next => action => {
    next(action);

    if (action.type === SELECT_BOOK) {
        dispatch(orderInProgress());
        dispatch(createOrder(action.payload))
    }
};

export const booksMdl = [getBooksFlow, processBooksCollection, selectBookFlow];
*/
