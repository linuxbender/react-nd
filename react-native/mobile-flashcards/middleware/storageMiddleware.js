import {AsyncStorage} from 'react-native';
import {
    METHOD_GET_ITEM,
    METHOD_MERGE_ITEM,
    METHOD_SET_ITEM,
    STORAGE_REQUEST
} from '../actions/storageActions';
import {hideUiLoader, showUiLoader} from '../actions/uiActions';
import {STORAGE_KEY} from '../utils/constants';

const mapActionAndPayload = (action, payload) => Object.assign({}, {type: action, data: payload});

export const storageApi = ({dispatch}) => next => action => {

    if (action.type === STORAGE_REQUEST) {
        dispatch(showUiLoader());

        const {method, onSuccess, onError} = action.meta;

        if (method === METHOD_MERGE_ITEM) {
            console.log(METHOD_MERGE_ITEM);
            console.log(action.data);
            AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({[action.data.key]: action.data}))
                .then(() => dispatch(mapActionAndPayload(onSuccess, action.data)))
                .then(() => dispatch(hideUiLoader()))
                .catch(error => {
                    dispatch(mapActionAndPayload(onError, error));
                    dispatch(hideUiLoader());
                });
        }

        if (method === METHOD_GET_ITEM) {
            console.log(METHOD_GET_ITEM);
            console.log(action.data);
            AsyncStorage.getItem(STORAGE_KEY)
                .then(dbJSON => {
                    let data = JSON.parse(dbJSON);
                    return Object.keys(data).map(key => data[key]);
                })
                .then(data => dispatch(mapActionAndPayload(onSuccess, data)))
                .then(() => dispatch(hideUiLoader()))
                .catch(error => {
                    dispatch(mapActionAndPayload(onError, error));
                    dispatch(hideUiLoader());
                });
        }

        if(method === METHOD_SET_ITEM) {
            console.log(METHOD_SET_ITEM);
            console.log(action.data);
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({[action.data.key]: action.data}))
                .then(() => dispatch(mapActionAndPayload(onSuccess, action.data)))
                .then(() => dispatch(hideUiLoader()))
                .catch(error => {
                    dispatch(mapActionAndPayload(onError, error));
                    dispatch(hideUiLoader());
                });
        }
    }
    return next(action)
};

export const storageMiddleware = [storageApi];