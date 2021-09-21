import React, {useState, useEffect} from 'react'
import data from '../../../data/data'
import ItemDetail from '../../Items/itemDetailContainer/itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { only } from '../../../firebase/firebase'



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const  {id} = useParams()
    

    useEffect(() => {
        const item = only(id)
        item.then((data) => {
            setProducto(data.data())
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