import React, { useContext } from 'react';
import { AppCacheContext } from '../../context/CacheProvider';

const Cart = () => {
    const {cart} = useContext(AppCacheContext)

    return(
        <>
        {cart.lenght > 0 ? cart.map((item) => <div>
            <h4>{item.nombre}</h4>
            <h4>{item.precio}</h4>
            <h2>{item.subtotal}</h2>
            <h2>{item.cantidad}</h2>
            </div>) : <div>No hay nada para comprar!</div>}
        </>
    )
}

export default Cart