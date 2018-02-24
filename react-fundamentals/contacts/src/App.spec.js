import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ListContacts from './ListContacts'
import { shallow } from 'enzyme';

describe('<App/> component tests', () => {
  const contactsData = [
    {
      "id": "ryan",
      "name": "Ryan Florence",
      "email": "ryan@reacttraining.com",
      "avatarURL": "http://localhost:5001/ryan.jpg"
    }];

  it('Component is loaded with ReactDom then renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Component is loaded without crashing', () => {
    shallow(<App />);
  });
});