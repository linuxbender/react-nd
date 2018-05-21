import {uuidv4} from '../utils/numberHelper';

const api = 'http://localhost:3001';

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

let token = localStorage.token;
if (!token)
    token = localStorage.token = uuidv4();

const headers = {
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
    'Authorization': token
};

export const getAllPosts = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json());

export const getAllPostComments = id =>
    fetch(`${api}/posts/${id}/comments`, {headers})
        .then(res => res.json());

export const getPostsByCategorie = categorie =>
    fetch(`${api}/${categorie}/posts`, {headers})
        .then(res => res.json());

export const upVotePost = id =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        body: '{"option": "upVote"}',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

export const upDownPost = id =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        body: '{"option": "downVote"}',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

export const createPost = post => {
    return fetch(`${api}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};

export const updatePost = (post) => {
    return fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};

export const deletePostById = id =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: {...headers}
    }).then(res => res.json());

export const getAllCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories);

export const deleteCommentById = id =>
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers: {...headers}
    }).then(res => res.json());

export const createNewComment = comment => {
    return fetch(`${api}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};

export const updateCommentById = comment => {
    return fetch(`${api}/comments/${comment.id}`, {
        method: 'PUT',
        body: JSON.stringify(comment),
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};

export const upVoteComment = id =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        body: '{"option": "upVote"}',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

export const downVoteComment = id =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        body: '{"option": "downVote"}',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());