import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    products,
    setProducts,
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
