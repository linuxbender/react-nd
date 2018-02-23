import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from './Button';

it('demo...21', () => {
  expect(2+1).toEqual(3);
});

it('renders without crashing', () => {
  shallow(<Button />);
});