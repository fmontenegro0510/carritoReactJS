import React, { useState } from 'react';
import ProductForm from './components/ProductForm/ProductForm';
import Cart from './components/Cart/Cart';
import './App.css';
/**
 * Renderiza una pantalla donde coexisten dos componentes formularios y el carrito de compras.
 *
 * @return {JSX.Element} El JSX renderizado.
 */
function App() {
  const [cartItems, setCartItems] = useState([]);
  /**
   * Agrega un producto al carrito de compras.
   *
   * @param {Object} product - El producto a agregar al carrito.
   * @return {void} esta función no devuelve nada.
   */
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  /**
   * Remueve un producto del carrito de compras, dado su índice que es pasado como parámetro.
   *
   * @param {number} index - El índice del producto a remover del carrito.
   * @return {void} esta función no devuelve nada.
   */
  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

    /**
   * Aumenta la cantidad de un producto del carrito de compras.
   *
   * @param {number} index -  El índice del producto a aumentar.
   * @return {void}  esta función no devuelve nada.
   */
  const handleIncreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

    /**
   * Decrementa la cantidad de un producto del carrito de compras.
   *
   * @param {number} index -  El índice del producto a decrementar.
   * @return {void}  esta función no devuelve nada.
   */
  const handleDecreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App">
      <ProductForm onAddToCart={handleAddToCart} />
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        totalItems={totalItems}
      />
    </div>
  );
}

export default App;