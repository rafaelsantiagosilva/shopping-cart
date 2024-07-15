import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import fetchProducts from '../../api/fetchProducts';
import Loading from '../Loading/Loading';

import './Products.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setIsLoading(false);
    });
  }, []);

  return (
    (isLoading && <Loading />) || (
      <section className="products container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
}
