import React from 'react';
import BookGrid from "./BookGrid";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<BookGrid books={[]} />);
});
