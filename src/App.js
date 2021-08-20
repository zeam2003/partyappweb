import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/Items/ItemListContainer'
import NavBar from '../src/components/NavBar/NavBar'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './components/Items/itemDetailContainer/ItemDetailContainer';
import ItemList from './components/Items/itemList/ItemList';
import SpinnerGlobal from './components/varios/Spiner';


function App() {


    return ( 
        <BrowserRouter>
        <div>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <ItemListContainer text = "Inicio" />
            </Route>
            
            <Route path="/mispedidos" exact>
                <ItemListContainer text = "Mis Pedidos" />
            </Route>
            <Route path="/tunegocio" exact>
                <ItemListContainer text = "Tu Negocio" />
            </Route>
            <Route path="/contacto" exact component={SpinnerGlobal}>
                <ItemListContainer text = "Contacto" />
            </Route>
            <Route path="/ingresar" exact>
                <ItemListContainer text = "Ingresar" />
            </Route>
            <Route path="/:categoria/" exact component={SpinnerGlobal}>
                <ItemList text = "Por id" />
            </Route>
            <Route path="/:categoria/:id" exact>
                <ItemDetailContainer text = "Por id" />
            </Route>


        </Switch>

        </div> 
        </BrowserRouter>

    );
}


export default App;