import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    <div>
      <NavbarComponent />
      <ItemListContainer saludo="< Bienvenido a Librit0s >"/>
    </div>
  )
}

export default App
