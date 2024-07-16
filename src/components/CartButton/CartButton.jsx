import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css';
import AppContext from '../../context/AppContext';

export default function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  const handleShowCart = () => {
    setIsCartVisible(true);
  };

  const handleHideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <button
      onClick={isCartVisible ? handleHideCart : handleShowCart}
      type="button"
      className="cart__button"
    >
      <AiOutlineShoppingCart />

      {cartItems.length > 0 && (
        <span className="cart-status">
          {cartItems.length > 9 ? '+9' : cartItems.length}
        </span>
      )}
    </button>
  );
}
