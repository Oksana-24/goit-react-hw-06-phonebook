import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';
import { filterContact } from 'redux/contactSlice';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <label className={css.filterLabel}>
        <span className={css.filterText}>Find contact by name</span>
        <input
          className={css.filterInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={filter}
          onChange={evt => dispatch(filterContact(evt.target.value))}
          required
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
