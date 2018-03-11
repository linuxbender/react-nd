import React from 'react';
import Book from "./Book";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    const func = _ => undefined;
    shallow(<Book book={{id: 1, name: "John"}} changeHandler={func} bookId='42' />);
});
