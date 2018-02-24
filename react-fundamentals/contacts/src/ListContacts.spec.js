import React from 'react';
import ListContacts from './ListContacts'
import { shallow } from 'enzyme';

describe('<ListContacts/> component tests', () => {

    it('Component is loaded without crashing', () => {
        shallow(<ListContacts />);
    });
    it('Contains <ol/> element and has className contact-list', () => {
        const wrapper = shallow(<ListContacts />);
        expect(wrapper.find('ol')).toHaveClassName('contact-list');
    });
});