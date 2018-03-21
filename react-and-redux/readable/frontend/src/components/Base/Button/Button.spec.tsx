import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { default as Button } from './Button';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button disabled={true} label={'foo'}/>, div);
});