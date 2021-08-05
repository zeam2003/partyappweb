import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'

import React, { useState } from 'react';

function App() {

    
    return ( 
        <>
            <NavBar/>
            <div>
                <ItemListContainer text="Tu carrito esta vacio" />
            </div>
            
        </>
    );
}


export default App;