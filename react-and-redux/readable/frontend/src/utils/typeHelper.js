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