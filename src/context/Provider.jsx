import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    isLoading,
    setIsLoading,
    isCartVisible,
    setIsCartVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
