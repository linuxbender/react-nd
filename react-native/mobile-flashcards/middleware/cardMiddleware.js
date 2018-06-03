import {
    CREATE_NEW_CARD,
    CREATE_NEW_CARD_ERROR,
    CREATE_NEW_CARD_SUCCESS,
    sortCardsListDescending
} from '../actions/cardActions';
import {loadDecks} from '../actions/deckActions';
import {METHOD_ADD_CARD, storageRequest} from '../actions/storageActions';
import {uuid} from '../utils/numberHelper';
import {T_Question} from '../utils/typeHelper';

export const addNewCard = ({dispatch}) => next => action => {
    next(action);

    if (action.type === CREATE_NEW_CARD) {

        const questionDto = {
            ...T_Question,
            key: uuid(),
            deckKey: action.data.deck.key,
            question: action.data.question,
            answer: action.data.answer,
            timestamp: new Date()
        };
        dispatch(storageRequest(METHOD_ADD_CARD, questionDto, CREATE_NEW_CARD_SUCCESS, CREATE_NEW_CARD_ERROR));
    }

    if (action.type === CREATE_NEW_CARD_SUCCESS) {
        dispatch(loadDecks());
        dispatch(sortCardsListDescending(action.data));
    }

    if (action.type === CREATE_NEW_CARD_ERROR) {
    }
};

export const cardMiddleware = [addNewCard];