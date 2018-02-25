import React, { Component } from 'react';
import CreateContact from './CreateContact';
import ListContacts from './ListContacts';
import { Route } from 'react-router-dom';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => this.setState({ contacts }));
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }));

    ContactsAPI.remove(contact);
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
        )} />
    <Route path="/create" component={CreateContact} />
      </div>
    )
  }
}

export default App;