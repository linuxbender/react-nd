import React from 'react';
import SearchList from "./SearchList";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<SearchList  />);
});
