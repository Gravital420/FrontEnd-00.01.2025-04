import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.title} height="200" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}