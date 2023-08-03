import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { useEffect, useState } from 'react';
import initialContact from './dataBase/initialContacts';

import nanoId from 'nano-id';

import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  // if (savedContacts != null && ![])
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return initialContact;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts); // в useState ми можемо передати тільки синхронна
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     setContacts(parsedContacts);
  //     return;
  //   }
  //   setContacts(initialContact);
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    console.log('data', data);
    const newContact = {
      id: nanoId(),
      ...data,
    };
    contacts.map(contact => contact.name).includes(data.name)
      ? alert(`${data.name} is already in contact`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  const findContact = evt => {
    setFilter(evt.target.value);
  };

  const filterName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
  return (
    <div className={css.appContainer}>
      <Section title="Phonebook">
        <ContactForm addContact={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={findContact} />
        <ContactList contacts={filterName()} handleDelete={handleDelete} />
      </Section>
    </div>
  );
};
