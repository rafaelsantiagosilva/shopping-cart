import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import fetchProducts from '../../api/fetchProducts';

import './Products.css';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      console.log(products);
    });
  }, []);

  return (
    <section className="products container">
      <ProductCard />
    </section>
  );
}
