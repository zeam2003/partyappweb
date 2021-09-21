import React, { useState } from 'react';

const AppCacheContext = React.createContext();

// funcion para centralizarl la logica del carrito que antes se aplicaba localmente en items

const CartLogic = ({children}) => {
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) => {
        const itemExiste = cart.find(item => item.id === producto.id)
        if(!itemExiste) {
            setCart([...cart, {
                id: producto.id, 
                nombre: producto.nombre, 
                precio: producto.precio, 
                cantidad: cantidad,
                subtotal: (producto.precio * cantidad)
            }])
            console.log(cart);
            console.log('desde cache prov', producto.precio);
            console.log('desde cache prov2', producto.cantidad);
            setUnidades(unidades + 1)
            setTotal(total + (producto.precio * cantidad))
        } else {
            const cartAux = cart.map((item) => {
                if(item.id === producto.id){
                    item.cantidad += cantidad
                    item.subtotal += (producto.precio * cantidad)
                } 
                return item
            })

            setCart(cartAux)
        }
    }

    return <AppCacheContext.Provider value={{cart, unidades, total, onAdd }} >
        {children}
    </AppCacheContext.Provider>
}

export	{CartLogic, AppCacheContext}
