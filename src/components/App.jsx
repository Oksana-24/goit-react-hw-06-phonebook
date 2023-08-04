import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.appContainer}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length !== 0 && <Filter />}
        <ContactList />
      </Section>
    </div>
  );
};
