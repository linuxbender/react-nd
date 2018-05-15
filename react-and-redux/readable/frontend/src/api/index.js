import {uuidv4} from '../utils/numberHelper';

const api = "  http://localhost:3001";

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

export const getPostsByCategorie = (categorie) =>
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

export const readPostById = id =>
    fetch(`${api}/posts/${id}`, {headers})
        .then(res => res.json());

export const updatePost = (id, post) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({post}),
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

export const deletePost = id =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: {...headers}
    }).then(res => res.json());

export const getAllCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories);

export const initAppData = {"posts": {}, "categories": {}};

export const initApp = () =>
    Promise.all([getAllPosts(), getAllCategories()])
        .then(res => {
            let initAppData = {posts: res[0], categories: res[1]};
            return initAppData;
        });