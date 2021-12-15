import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
