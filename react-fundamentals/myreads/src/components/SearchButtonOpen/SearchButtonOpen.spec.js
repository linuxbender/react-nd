import React from 'react';
import SearchButtonOpen from "./SearchButtonOpen";
import {shallow} from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<SearchButtonOpen/>);
});