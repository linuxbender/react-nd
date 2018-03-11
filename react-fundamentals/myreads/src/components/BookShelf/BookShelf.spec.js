import React from 'react';
import BookShelf from "./BookShelf";
import {shallow, mount} from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<BookShelf title='Hello'><h1>World</h1></BookShelf>);
});

it('BookShelf title is set to Hello', () => {
    const expectedValue = 'Hello';
    const expectedChild = '<h1>World</h1>';

    const testee = mount(<BookShelf title={expectedValue}>{expectedChild}</BookShelf>);

    expect(testee.props().title).toBe(expectedValue);
    expect(testee.props().children).toBe(expectedChild);
});
