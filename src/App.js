import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider  from './context/CartContext';
import ThankYouPage from './components/ThankYouPage';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar/>
          <Routes>
            <Route 
              exact 
              path="/" 
              element={<ItemListContainer />}/>
            <Route 
              exact 
              path="/category/:type" 
              element={<ItemListContainer />}/>
            <Route 
              exact 
              path="/item/:guitar" 
              element={<ItemDetailContainer/>}/>
              <Route 
              exact 
              path="/cart" 
              element={<Cart/>}/>
              <Route 
                exact
                path="/thankyou/:idOrder"
                element={<ThankYouPage/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
