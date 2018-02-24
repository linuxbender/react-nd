import React from 'react';
import ListContacts from './ListContacts'
import { shallow } from 'enzyme';

describe('<ListContacts/> component tests', () => {

    it('Component is loaded without crashing', () => {
        shallow(<ListContacts contacts={[]}  onDeleteContact={()=> ''} />);
    });
    it('Contains <ol/> element and has className contact-list', () => {
        const testee = shallow(<ListContacts contacts={[]} onDeleteContact={()=> ''} />);
        expect(testee.find('ol')).toHaveClassName('contact-list');
    });

    it('When contacts is empty then should no list items <li> displayed ', () => {
        const testee = shallow(<ListContacts contacts={[]}  onDeleteContact={()=> ''} />);
        expect(testee.find('li')).toBeEmpty();
    });

    it('When contacts is set with an empty list then should no list items <li> displayed ', () => {
        const contacts = [];

        const testee = shallow(<ListContacts contacts={contacts}  onDeleteContact={()=> ''} />);

        expect(testee.find('li')).toBeEmpty();
    });

    it('When contacts is set with one item then should one list item displayed', () => {
        const contacts = [{
            "id": "ryan",
            "name": "Ryan Florence",
            "email": "ryan@reacttraining.com",
            "avatarURL": "http://localhost:5001/ryan.jpg"
        }];

        const testee = shallow(<ListContacts contacts={contacts}  onDeleteContact={()=> ''} />);

        expect(testee.find('li')).toHaveLength(1);
    });
    it('When contacts is set with one item then should props.contacts have one item', () => {

        const contacts = [{
            "id": "ryan",
            "name": "Ryan Florence",
            "email": "ryan@reacttraining.com",
            "avatarURL": "http://localhost:5001/ryan.jpg"
        }];

        const testee = shallow(<ListContacts contacts={contacts}  onDeleteContact={()=> ''} />);
        expect(testee.props('contacts').children).toHaveLength(1);
        expect(testee.contains(contacts[0].email)).toBeTruthy();
        expect(testee.contains(contacts[0].name)).toBeTruthy();
    });
});
