import React from 'react';
import Title from "./Title";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<Title text='Title..' />);
});