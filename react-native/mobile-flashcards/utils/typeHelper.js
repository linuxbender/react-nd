export const T_Deck = {
    key: null,
    title: '',
    timestamp: null,
    questions: []
};

export const T_Question = {
    key: null,
    deckKey: null,
    question: '',
    answer: '',
    timestamp: null
};

export const T_UserInterface = {
    isLoading: false
};

export const T_Quiz = {
    quizIndex: 0,
    score: 0,
    showAnswer: false
};

export const T_DeckAndQuestion = {
    deck: T_Deck,
    question: '',
    answer: ''
};

export const T_Store = {
    decks: [],
    ui: T_UserInterface,
    quiz: T_Quiz
};