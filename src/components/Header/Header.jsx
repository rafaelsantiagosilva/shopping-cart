import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
      </div>
    </header>
  );
}
