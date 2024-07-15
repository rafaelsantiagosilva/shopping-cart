import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';

import './SearchBar.css';
import AppContext from '../../context/AppContext';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { setProducts, setIsLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const products = await fetchProducts(searchValue);
    setIsLoading(false);
    setProducts(products);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
