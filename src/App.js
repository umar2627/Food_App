import { useState } from 'react';

import CartProvider from './store/CartProvider';
import Cart from './componennts/Cart/Cart';
import Header from './componennts/Layout/Header';
import Meals from './componennts/Meals/Meals';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} /> }
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;