import {
    CREATE_NEW_CARD,
    CREATE_NEW_CARD_ERROR,
    CREATE_NEW_CARD_SUCCESS,
    sortCardsListDescending
} from '../actions/cardActions';
import {METHOD_MERGE_ITEM, storageRequest} from '../actions/storageActions';
import {uuid} from '../utils/numberHelper';

export const addNewCard = ({dispatch}) => next => action => {
    next(action);

    if (action.type === CREATE_NEW_CARD) {

        let question = {
            key: uuid(),
            question: action.data.question,
            answer: action.data.answer,
            timestamp: Date.now()
        };
        const dtoData = Object.assign({}, action.data.deck);
        dtoData.questions.push(question);
        dispatch(storageRequest(METHOD_MERGE_ITEM, dtoData, CREATE_NEW_CARD_SUCCESS, CREATE_NEW_CARD_ERROR));
    }

    if (action.type === CREATE_NEW_CARD_SUCCESS) {
        dispatch(sortCardsListDescending(action.data));
    }

    if (action.type === CREATE_NEW_CARD_ERROR) {
    }
};

export const cardMiddleware = [addNewCard];