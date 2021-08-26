import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/Items/ItemListContainer'
import NavBar from '../src/components/NavBar/NavBar'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './components/Items/itemDetailContainer/ItemDetailContainer';
import ItemList from './components/Items/itemList/ItemList';
import SpinnerGlobal from './components/varios/Spiner';
import Cart from './components/Carts/Cart'
import Inicio from './components/Inicio/Inicio'
import { CustomContext, listado, carritoCompras } from './components/Contexts/CartContext';
import { useState } from 'react';




    
function App() {


    return ( 
        <CustomContext.Provider value={listado}>
            <BrowserRouter>
            <div>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                <Inicio />
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

                <Route path="/cart" exact>
                    <Cart/>
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
        </CustomContext.Provider>
    );
}


export default App;