import PropTypes from 'prop-types';
import { Component } from 'react';
import { BiSearch } from 'react-icons/bi'
import {SearchHeader, SearchForm, SearchButton, SearchInput} from './SearchBar.styled'

class SearchBar extends Component {
  state = {
    itemName: '',
  };

  handleChange = e => {
    const value = e.currentTarget.value.toLowerCase();
      this.setState({ itemName: value });
  };

  searchResult = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

  };

  render() {
    const { itemName } = this.state;
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.searchResult}>
          <SearchButton type="submit">
                    <BiSearch style={{width: 30, height: 30}} />
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={itemName}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
