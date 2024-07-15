import React, { useEffect, useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import fetchProducts from '../../api/fetchProducts';
import Loading from '../Loading/Loading';

import './Products.css';
import AppContext from '../../context/AppContext';

export default function Products() {
  const { products, setProducts, isLoading, setIsLoading } =
    useContext(AppContext);

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
