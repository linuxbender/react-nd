import React from 'react';
import SearchBar from "./SearchBar";
import {shallow} from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<SearchBar/>);
});