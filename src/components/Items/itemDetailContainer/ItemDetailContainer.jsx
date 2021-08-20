import React, {useState, useEffect} from 'react'
import data from '../../../data/data'
import ItemDetail from '../../Items/itemDetailContainer/itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const  {id} = useParams()
    

    useEffect(() => {
        const productos = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data)
                }, 2000);
            })
        }
        productos().then((items) => {
            const producto = items.find(producto => producto.id === id)
            setProducto(producto)
            // console.log(items);
            setCargando(false)
        })
    },[])

    return(
        <>
        {cargando ? <h3>Cargando...</h3> :
            <ItemDetail nombre={producto.nombre} desc={producto.desc} precio={producto.precio} categoria={producto.categoria} stock={producto.stock} negocio={producto.negocio}/>
        }
        </>
    )
}

export default ItemDetailContainer