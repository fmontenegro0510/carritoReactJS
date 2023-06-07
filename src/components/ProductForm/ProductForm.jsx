import React, { useState } from 'react';

function ProductForm({ onAddToCart }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name: name.trim(),
      description: description.trim(),
      price: parseFloat(price),
      quantity: 1,
    };

    onAddToCart(product);

    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className="form-section">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <button type="submit" disabled={!name || !price}>
          Agregar
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
