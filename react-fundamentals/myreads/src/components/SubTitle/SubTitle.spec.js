import React from 'react';
import SubTitle from "./SubTitle";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<SubTitle text='Sub Title' />);
});