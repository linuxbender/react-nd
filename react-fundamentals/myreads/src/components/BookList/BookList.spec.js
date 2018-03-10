import React from 'react';
import BookList from "./BookList";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<BookList  />);
});
