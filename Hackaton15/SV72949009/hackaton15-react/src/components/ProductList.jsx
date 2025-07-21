import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
