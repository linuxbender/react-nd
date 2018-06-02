import {AsyncStorage} from 'react-native';
import {METHOD_GET_ITEM, METHOD_MERGE_ITEM, STORAGE_REQUEST} from '../actions/storageActions';
import {STORAGE_KEY} from '../utils/constants';

const mapActionAndPayload = (action, payload) => Object.assign({}, {type: action, data: payload});

export const storageApi = ({dispatch}) => next => action => {

    if (action.type === STORAGE_REQUEST) {

        const {method, onSuccess, onError} = action.meta;

        if (method === METHOD_MERGE_ITEM) {
            const storageValue = JSON.stringify({[action.data.key]: action.data});

            AsyncStorage[method](STORAGE_KEY, storageValue)
                .then(() => dispatch(mapActionAndPayload(onSuccess , action.data)))
                .catch(error => dispatch(mapActionAndPayload(onError, error)));
        }

        if (method === METHOD_GET_ITEM) {
            AsyncStorage[method](STORAGE_KEY)
                .then(dbJSON => {
                    let data = JSON.parse(dbJSON);
                    return Object.keys(data).map(key => data[key]);
                })
                .then(data => dispatch(mapActionAndPayload(onSuccess, data)))
                .catch(error => dispatch(mapActionAndPayload(onError, error)));
        }
    }
    return next(action)
};

export const storageMiddleware = [storageApi];