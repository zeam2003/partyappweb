import React, {useState, useEffect} from 'react'
import data from '../../../data/data'
import Item from '../../Items/itemList/item/Item'



const ItemList = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const productos = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data)
                }, 2000);
            })
        }
        productos().then((items) => {
            setProductos(items)
            console.log(items);
            setCargando(false)
        })
    },[])

    return(
        <>
        {cargando ? <h3>Cargando...</h3> :
        productos.map((producto)=> 
            <Item key={producto.id} nombre={producto.nombre} desc={producto.desc} precio={producto.precio} categoria={producto.categoria} stock={producto.stock}/>
        )
        }
        </>
    )
}

export default ItemList