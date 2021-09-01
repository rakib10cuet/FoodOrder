import React,{useState} from 'react';
import './App.css';
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals/Meals";
import Cart from "./Components/Cart/Cart/Cart";
import CartProvider from "./Store/CartProvider/CartProvider";

function App() {
    const [cartIsShown,setCartIsShown] = useState(false);
    const showCartHandler = () =>{
        setCartIsShown(true);
    };
    const hideCartHandler = () =>{
        setCartIsShown(false);
    };
  return (
      /*Fragment is replaced by CartProvider*/
      // <Fragment>
      <CartProvider>
          {/*when cartIsShown true then show only. Otherwise hide*/}
          {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
          {/*when cart button will click then only show cart*/}
          <Header onShowCart={showCartHandler}/>
          {/*main part*/}
          <main>
              <Meals/>
          </main>
      </CartProvider>
      // </Fragment>
  );
}

export default App;
