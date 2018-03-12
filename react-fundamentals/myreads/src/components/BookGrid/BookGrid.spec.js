import React from 'react';
import BookGrid from "./BookGrid";
import {shallow, mount} from 'enzyme';

const books = [{id:'1', name: 'John'}];

it('Component is loaded without crashing', () => {
    const func = _ => undefined;
    shallow(<BookGrid books={books} changeHandler={func}/>);
});

it('When BookGrid component receve 1 book then shoud display one li entry  ', () => {
    const func = _ => undefined;
    const testee = mount(<BookGrid books={books} changeHandler={func}/>);

    expect(testee.props().books[0].id).toBe('1');
});