import Button from "../Buttons/Button"
import Cart from "../Carts/CartWidget"
import "./NavBar.css"



export default function NavBar() {
    return ( 
        <>
        <Button text = "PartyApp" / >
        <Button text = "Home" / >
        <Button text = "Productos" / >
        <Button text = "Servicios" / >
        <Button text = "Contacto" / >
        <Cart />
        </>
    )
}