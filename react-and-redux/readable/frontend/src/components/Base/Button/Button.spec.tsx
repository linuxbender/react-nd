import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { default as Button } from './Button';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Button disabled={true} label={'foo'} />);
});