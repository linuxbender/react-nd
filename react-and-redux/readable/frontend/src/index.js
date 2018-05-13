import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {loadPosts} from './actions/postActions';
import configureStore from './store';
import {Provider} from 'react-redux';
import {loadCategories} from './actions/categoryActions';

const store = configureStore();
store.dispatch(loadPosts());
store.dispatch(loadCategories());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);