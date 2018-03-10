import React from 'react';
import SearchButtonClose from "./SearchButtonClose";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<SearchButtonClose  />);
});
