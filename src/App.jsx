import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
 import 'bootstrap/js/dist/dropdown'
import $ from 'jquery';
import Popper from 'popper.js';
import { NavBar , ItemListContainer , CartWidget} from './components' 


function App() {
  return (
    <>
    <h1>Entrega del Desafio: Crear una CartWidget</h1>
            <NavBar/>
            <ItemListContainer/>
        </>
  );
}

export default App;
