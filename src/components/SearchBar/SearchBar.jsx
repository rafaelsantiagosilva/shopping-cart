import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input
        type="search"
        className="search__input"
        name="search__input"
        id="search__input"
        placeholder="Buscar produtos"
        onChange={({ target }) => setSearchValue(target.value)}
        value={searchValue}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}
