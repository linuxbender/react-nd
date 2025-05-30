import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import configureStore from './store/appStore';
import './styles/index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/">
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('app'));