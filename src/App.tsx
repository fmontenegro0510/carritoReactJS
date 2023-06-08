import React, { useState } from 'react';
import ProductForm from './components/ProductForm/ProductForm';
import Cart from './components/Cart/Cart';
import{ createTheme, NextUIProvider, Container, Card, Row, Text, Col, Spacer, Grid} from '@nextui-org/react';
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
 
// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      // primaryLight: '$green200',
      // primaryLightHover: '$green300',
      // primaryLightActive: '$green400',
      // primaryLightContrast: '$green600',
      // primary: '#606464',
      // primaryBorder: '$green500',
      // primaryBorderHover: '$green600',
      // primarySolidHover: '$green700',
      // primarySolidContrast: '$white',
      // primaryShadow: '$green500',

      // primarytext: '#221D1F',





      gradient: 'linear-gradient(45deg, $blue100 -25%, $pink500 -10%, $purple500 60%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

  return (
    <NextUIProvider theme={theme}>
      <Grid.Container gap={2}>
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$gradient' }}>              
              <Card.Body>
                <ProductForm onAddToCart={handleAddToCart} />
              </Card.Body>
          </Card>       
        </Col>
        <Col>
            <Card css={{ $$cardColor: '$colors$primary' }}>
              <Card.Body>
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  <Cart
                    cartItems={cartItems}
                    onRemoveFromCart={handleRemoveFromCart}
                    onIncreaseQuantity={handleIncreaseQuantity}
                    onDecreaseQuantity={handleDecreaseQuantity}
                    totalItems={totalItems}
                  />
                </Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Grid.Container>
    </NextUIProvider>
  );
}

export default App;