import React from 'react';
import SearchBooks from "./SearchBooks";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<SearchBooks  />);
});
