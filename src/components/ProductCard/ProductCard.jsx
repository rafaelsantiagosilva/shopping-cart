import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';

export default function ProductCard() {
  return (
    <section className="product-card">
      <img
        src="http://http2.mlstatic.com/D_932360-MLA46545868431_062021-W.jpg"
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">R$ 200,20</h2>
        <h3 className="card__title">Manual do Dev</h3>
      </div>

      <button type="button" className="card__add-cart">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}
