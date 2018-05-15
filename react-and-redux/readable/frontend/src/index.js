import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './styles/index.css';
import App from './App';
import configureStore from './store';
import {loadPosts} from './actions/postActions';
import {loadCategories} from './actions/categoryActions';
import {navActiveCategory} from "./actions/navActions";

const store = configureStore();
store.dispatch(navActiveCategory());
store.dispatch(loadPosts());
store.dispatch(loadCategories());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);