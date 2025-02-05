import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import  AppContext  from '../../context/AppContext';
import './ProductCard.css';

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCartItem = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h3 className="card__title">{title}</h3>
      </div>

      <button
        onClick={handleAddCartItem}
        type="button"
        className="button__add-cart"
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

export default ProductCard;
