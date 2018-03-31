import * as React from 'react';
import { default as Button } from './Button';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Button label={'foo'} />);
});