import React, { useState } from 'react';
import ProductForm from './components/ProductForm/ProductForm';
import Cart from './components/Cart/Cart.jsx';
import './App.css';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

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
