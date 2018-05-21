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
    category: '',
    body: '',
    timestamp: null
};

export const T_Detail = {
    post: T_Post,
    comment: []
};

export const T_Store = {
    category: [],
    navActiveCategory: '',
    post: [],
    apiCallsInProgress: 0,
    detail: T_Detail
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