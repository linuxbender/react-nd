export const T_Deck = {
    key: null,
    title: '',
    timestamp: null,
    deleted: false,
    questions: []
};

export const T_Question = {
    key: null,
    question: '',
    answer: '',
    deleted: false,
    timestamp: null
};

export const T_UserInterface = {
    isLoading: false
};

export const T_Store = {
    decks: [],
    ui: T_UserInterface
};

export const T_DeckAndQuestion = {
    deck: T_Deck,
    question: '',
    answer: ''
};