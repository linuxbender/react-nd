import React from 'react';
import BookShelfChanger from "./BookShelfChanger";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    const func = _ => undefined;
    shallow(<BookShelfChanger changeHandler={func} bookId='42' />);
});