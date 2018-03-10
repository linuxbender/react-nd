import React from 'react';
import BooksApp from "./App";
import { shallow } from 'enzyme';
import {BrowserRouter} from 'react-router-dom'

it('Component is loaded without crashing', () => {
    const func = _ => undefined;
    shallow(<BrowserRouter><BooksApp/></BrowserRouter>);
});
