import React from 'react';
import Label from "./Label";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<Label htmlFor='htmlFor' text='Label..' />);
});