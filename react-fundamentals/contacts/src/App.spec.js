import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('demo...21', () => {
  expect(2+1).toEqual(3);
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <div>Hello World</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

xit('Where App-intro text has to get started...text', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-intro').text()).toEqual('To get started, edit src/App.js.. and save to reload.');
});