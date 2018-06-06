export const ADD_QUIZ_SCORE = 'ADD_QUIZ_SCORE';
export const REST_QUIZ = 'REST_QUIZ';
export const SHOW_ANSWER = 'SHOW_ANSWER';
export const UPDATE_QUIZ_INDEX = 'UPDATE_QUIZ_INDEX';

export const addQuizScore = data => ({ type: ADD_QUIZ_SCORE, data});
export const restQuiz = data => ({type: REST_QUIZ, data});
export const showAnswer = data =>  ({type: SHOW_ANSWER, data});
export const updateQuizIndex = data =>  ({type: UPDATE_QUIZ_INDEX, data});