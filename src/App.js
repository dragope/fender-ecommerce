import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Hola, soy un Item List Container'/>
    </div>
  );
}

export default App;
