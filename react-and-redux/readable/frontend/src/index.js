import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {loadCategories} from './actions/categoryActions';
import {navActiveCategory} from './actions/navActions';
import {loadPosts} from './actions/postActions';
import App from './App';
import configureStore from './store';

import './styles/index.css';

const store = configureStore();
store.dispatch(navActiveCategory());
store.dispatch(loadPosts());
store.dispatch(loadCategories());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);