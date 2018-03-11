import React from 'react';
import SearchContent from "./SearchContent";
import {shallow} from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<SearchContent/>);
});