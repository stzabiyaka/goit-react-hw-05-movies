import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!query.trim()) {
      alert('Please enter at least one symbol.');
      return;
    }
    onSubmit(query.toLocaleLowerCase());
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies"
      />
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
