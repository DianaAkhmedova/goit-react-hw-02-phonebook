import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { PhonebookContainer } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const newContact = { ...contact };
    newContact.id = nanoid();

    const isContainsContact = contacts.some(
      ({ name }) =>
        name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );

    if (isContainsContact)
      return alert(`${newContact.name} is already in contacts`);

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  handleChangeFilter = event => {
    const { value } = event.currentTarget;

    this.setState({ filter: value });
  };

  contactsFilter() {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  removeContact = contactId =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts].filter(({ id }) => id !== contactId),
    }));

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.contactsFilter();

    return (
      <PhonebookContainer>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filterValue={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        {contacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            removeContact={this.removeContact}
          />
        )}
      </PhonebookContainer>
    );
  }
}

export default App;
