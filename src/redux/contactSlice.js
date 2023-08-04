import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,

  reducers: {
    addContact(state, { payload }) {
      const contact = {
        id: nanoid(),
        name: payload.name,
        number: payload.number,
      };
      return {
        ...state,
        contacts: [...state.contacts, contact],
      };
    },
    deleteContact(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    },
    filterContact(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;

export const contactReducer = contactSlice.reducer;
