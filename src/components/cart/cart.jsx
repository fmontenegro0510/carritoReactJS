import React from 'react';

function Cart({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity, totalItems }) {
  return (
    <div className="cart-section">
      <h2>Carrito de Compras</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                {item.description && <span>({item.description})</span>}
                <span>Precio: ${item.price.toFixed(2)}</span>
                <span>Cantidad: {item.quantity}</span>
                <span>Precio Total: ${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => onIncreaseQuantity(index)}>+</button>
                <button onClick={() => onDecreaseQuantity(index)}>-</button>
                <button onClick={() => onRemoveFromCart(index)}>Quitar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <p>Cantidad de Productos: {totalItems}</p>
        <p>Precio Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Cart;
