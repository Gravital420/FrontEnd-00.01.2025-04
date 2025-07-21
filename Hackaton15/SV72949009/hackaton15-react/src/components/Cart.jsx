import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.title}
                <span>
                  ${item.price}
                  <button
                    className="btn btn-sm btn-danger ms-3"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <h4>Total: ${getTotal().toFixed(2)}</h4>
          <button className="btn btn-warning" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}