import React, {useState, useEffect} from 'react'
import data from '../../../data/data'
import Item from '../../Items/itemList/item/Item'

import { useParams } from 'react-router-dom'
import SpinnerGlobal from '../../varios/Spiner'
import { getCollection, getDocs } from '../../../firebase'


const ItemList = () => {

    const { categoria } = useParams()
    // console.log(categoria);
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const q = getCollection('items')
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                console.log(doc.id);
                console.log(doc.data);
            });
        }
        fetchData()
    },[])
/* 
    useEffect(() => {
        const productos = () => {
            return new Promise((resolve, reject) => {
                setCargando(true)
                setTimeout(() => {
                    resolve(data)
                }, 2000);
            })
        }
        productos().then((items) => {
            if(categoria != null || '') {
               const productosFiltrados = items.filter(( producto ) => producto.categoria === categoria)
               setProductos(productosFiltrados)
                // console.log(items);
               setCargando(false)
            } else {
                setProductos(items)
                // console.log('no es igual la categoria',items);
                setCargando(false)
            }
            
        })
    },[categoria])
 */
    return(
        <>
       /*  {cargando ? <SpinnerGlobal></SpinnerGlobal>
             :
        productos.map((producto)=> 
            <Item key={producto.id} nombre={producto.nombre} desc={producto.desc} precio={producto.precio} categoria={producto.categoria} stock={producto.stock} id={producto.id}/>
        )
        } */
        </>
    )
}

export default ItemList