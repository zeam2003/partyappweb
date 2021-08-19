import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/Items/ItemListContainer'
import NavBar from '../src/components/NavBar/NavBar'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


function App() {


    return ( 
        <BrowserRouter>
        <div>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <ItemListContainer text = "Tu carrito esta vacio" />
            </Route>
            <Route path="/catering" exact>
                <ItemListContainer text = "Tu carrito esta vacio" />
            </Route>
            
        </Switch>

        </div> 
        </BrowserRouter>

    );
}


export default App;