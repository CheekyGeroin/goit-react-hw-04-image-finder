import PropTypes from 'prop-types';
import { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [itemName, setItemName] = useState('');

  const handleChange = e => {
    const val = e.currentTarget.value.toLowerCase();

    setItemName(val);
  };

  const searchResult = e => {
    e.preventDefault();

    onSubmit(itemName);
  };

  return (
    <SearchHeader>
      <SearchForm onSubmit={searchResult}>
        <SearchButton type="submit">
          <BiSearch style={{ width: 30, height: 30 }} />
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={itemName}
        />
      </SearchForm>
    </SearchHeader>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
