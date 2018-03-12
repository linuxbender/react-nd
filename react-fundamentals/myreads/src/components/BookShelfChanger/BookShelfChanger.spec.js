import React from 'react';
import BookShelfChanger from "./BookShelfChanger";
import {shallow} from 'enzyme';

it('Component is loaded without crashing', () => {
    const func = _ => undefined;
    const book = {id: '42'};
    shallow(<BookShelfChanger changeHandler={func} book={book}/>);
});