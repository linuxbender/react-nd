import {AsyncStorage} from 'react-native';
import {
    METHOD_ADD_CARD,
    METHOD_ADD_DECK,
    METHOD_READ_ALL_DECKS,
    METHOD_REMOVE_DECK,
    STORAGE_REQUEST
} from '../actions/storageActions';
import {hideUiLoader, showUiLoader} from '../actions/uiActions';
import {STORAGE_KEY} from '../utils/constants';

const mapActionAndPayload = (action, payload) => Object.assign({}, {type: action, data: payload});

export const storageApi = ({dispatch}) => next => action => {

    if (action.type === STORAGE_REQUEST) {
        dispatch(showUiLoader());

        const {method, onSuccess, onError} = action.meta;

        if (method === METHOD_REMOVE_DECK) {

            AsyncStorage.getItem(STORAGE_KEY)
                .then(JSON.parse)
                .then(data => {
                    data[action.data.key] = undefined;
                    delete data[action.data.key];
                    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                })
                .then(() => {
                    dispatch(mapActionAndPayload(onSuccess, action.data));
                })
                .catch(error => {
                    dispatch(mapActionAndPayload(onError, error));
                    dispatch(hideUiLoader());
                    return [];
                });
        }

        if (method === METHOD_READ_ALL_DECKS) {

            AsyncStorage.getItem(STORAGE_KEY)
                .then(JSON.parse)
                .then(data => Object.keys(data).map(key => data[key]))
                .then(result => {
                    dispatch(mapActionAndPayload(onSuccess, result));
                    dispatch(hideUiLoader());
                }).catch(error => {
                dispatch(mapActionAndPayload(onError, error));
                dispatch(hideUiLoader());
                return [];
            });
        }

        if (method === METHOD_ADD_DECK) {

            const data = {[action.data.key]: action.data};

            AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(data))
                .then(() => {
                    dispatch(mapActionAndPayload(onSuccess, action.data));
                    dispatch(hideUiLoader());
                });
        }

        if (method === METHOD_ADD_CARD) {

            AsyncStorage.getItem(STORAGE_KEY)
                .then(JSON.parse)
                .then(data => {
                    data[action.data.deckKey].questions.push(action.data);
                    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                })
                .then(() => {
                    dispatch(mapActionAndPayload(onSuccess, action.data));
                })
                .catch(error => {
                    dispatch(mapActionAndPayload(onError, error));
                    dispatch(hideUiLoader());
                    return [];
                });
        }
    }
    return next(action)
};

export const storageMiddleware = [storageApi];