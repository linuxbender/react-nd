import React from 'react';
import Book from "./Book";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<Book book={{id: 1, name: "John"}} />);
});
