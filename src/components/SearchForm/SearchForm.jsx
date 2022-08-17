import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Field, Form, SubmitBtn } from './SearchForm.styled';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!query.trim()) {
      alert('Please enter at least one symbol.');
      setQuery('');
      return;
    }
    navigate({ ...location, search: `query=${query}` });
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies"
      />
      <SubmitBtn>Search</SubmitBtn>
    </Form>
  );
};
