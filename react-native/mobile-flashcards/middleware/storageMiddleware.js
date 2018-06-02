import {AsyncStorage} from 'react-native';
import * as T from '../actions/actionNames';
import {METHOD_GET_ITEM, METHOD_MERGE_ITEM} from '../actions/storageActions';
import {STORAGE_KEY} from '../utils/constants';

export const storageApi = ({dispatch}) => next => action => {

    if (action.type === T.STORAGE_REQUEST) {

        const {method, onSuccess, onError} = action.meta;

        if (method === METHOD_MERGE_ITEM) {
            const storageValue = JSON.stringify({[action.data.key]: action.data});

            AsyncStorage[method](STORAGE_KEY, storageValue)
                .then(() => dispatch({type: onSuccess, data: action.data}))
                .catch(error => dispatch({type: onError, error}));
        }

        if (method === METHOD_GET_ITEM) {
            AsyncStorage[method](STORAGE_KEY)
                .then(dbJSON => {
                    let data = JSON.parse(dbJSON);
                    return Object.keys(data).map(i => data[i]);
                })
                .then(data => dispatch({type: onSuccess, data}))
                .catch(error => dispatch({type: onError, error}));
        }
    }
    return next(action)
};

export const storageMiddleware = [storageApi];