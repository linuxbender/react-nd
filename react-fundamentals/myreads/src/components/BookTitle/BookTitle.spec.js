import React from 'react';
import BookTitle from "./BookTitle";
import {shallow} from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<BookTitle text='Hello World'/>);
});