import React, { useState } from 'react';
import { Input, Spacer, Text, Button  } from "@nextui-org/react";

/**
 * Representa un componente de tipo formulario de producto con inputs para nombre, descripción,
 *  y  precio. El handler onSubmit agrega un producto con los datos proporcionados al carrito
 *  y restablece el formulario.
 *
 * @param {function} onAddToCart - funcion que agrega un producto al carrito
 * @return {JSX.Element} el componente de tipo formulario de producto
 */
function ProductForm({ onAddToCart }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  /**
   * actualiza el state name, con el valor del input del nombre
   *
   * @param {Object} e - el objeto evento, que contiene el valor del input para el nombre
   * @return {void}  no retorna nada
   */
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
    /**
   * actualiza el state descripcion, con el valor del input descripcion
   *
   * @param {Object} e - el objeto evento, que contiene el valor del input para la descripcion
   * @return {void}  no retorna nada
   */
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
    /**
   * actualiza el state precio, con el valor del input del precio
   *
   * @param {Object} e - el objeto evento, que contiene el valor del input para el precio
   * @return {void}  no retorna nada
   */
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  /**
   * Envia el formulario, creando un objeto producto, con los datos proporcionados
   * agregando el producto al carrito y restablece el formulario.
   * @param {object} e - el objeto evento
   * @return {void}
   */
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
      <Text
        h1
        size={60}
        css={{
          textGradient: "30deg, $pink600 -50%, $blue600 100%",
        }}
        weight="bold"
      >
        Agregar Productos
      </Text>
      <Spacer y={1} />

    <form onSubmit={handleSubmit}>
      <div>
        <Input clearable bordered  type="text"
          id="name"
          value={name}
          onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <input
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

      <Spacer y={0.5} />
      <Button size="xl" >Agregar</Button>




      <button type="submit" disabled={!name || !price}>
        Agregar
      </button>
    </form>
  </div>
  );
}

export default ProductForm;
