export const T_Post = {
    id: null,
    title: '',
    author: '',
    category: '',
    body: '',
    timestamp: null
};

export const T_Comment = {
    id: null,
    parentId: null,
    author: '',
    body: '',
    timestamp: null
};

export const T_Store = {
    category: [],
    navActiveCategory: '',
    post: [],
    apiCallsInProgress: 0,
    comment: []
};

export const T_FORM_COMMENT = {
    comment: T_Comment,
    newComment: T_Comment,
    isValid: false,
    isAuthorValid: false,
    isBodyValid: false,
};

export const T_FORM_POST = {
    post: T_Post,
    newPost: T_Post,
    isValid: false,
    isTitleValid: false,
    isAuthorValid: false,
    isBodyValid: false,
    isCategoryValid: false
};