import {ADD_QUIZ_SCORE, REST_QUIZ, SHOW_ANSWER, UPDATE_QUIZ_INDEX} from '../actions/quizActions';
import {T_Quiz, T_Store} from '../utils/typeHelper';

const quizReducer = (state = T_Store.quiz, action) => {
    switch (action.type) {
        case ADD_QUIZ_SCORE:
            return {...state, score: action.data};
        case REST_QUIZ:
            return {...T_Quiz};
        case SHOW_ANSWER:
            return {...state, showAnswer: action.data};
        case UPDATE_QUIZ_INDEX:
            return {...state, quizIndex: action.data};
        default:
            return state;
    }
};

export default quizReducer;