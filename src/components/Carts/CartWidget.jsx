import './CartWidget.css'
import ShoppingCart from '../../assets/icons/shopping-cart.svg'


export default function Cart(props) {

    return ( <>
        <div className="icono-cart-cont">
            <img className="icono-cart" src={ShoppingCart} alt="" />
        </div>

        </>
    )
}