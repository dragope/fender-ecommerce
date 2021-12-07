import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Hola, soy un Item List Container'/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
