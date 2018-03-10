import React from 'react';
import BookContent from "./BookContent";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<BookContent  />);
});
