import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'
import ItemCount from './components/Items/ItemCount'


function App() {


    return ( 
        <>
        <NavBar / >
        <div >
            <ItemListContainer text = "Tu carrito esta vacio" / >
        </div>
        <ItemCount onAdd={() => console.log('agrego')} />
        </>
    );
}


export default App;