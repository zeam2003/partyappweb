import React, {useState, useEffect} from 'react'
// import data from '../../../data/data'
import Item from '../../Items/itemList/item/Item'

import { useParams } from 'react-router-dom'
import SpinnerGlobal from '../../varios/Spiner'
import { allItem, itemCat } from '../../../firebase/firebase'


const ItemList = () => {

    const { categoria } = useParams()
    // console.log(categoria);
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        if (categoria != null) {
            const items =itemCat(categoria)
            items.then((data) => {
                const itemsAux=[]
                data.forEach(item => {
                    itemsAux.push({
                        id:item.id, 
                        nombre: item.data().nombre, 
                        desc: item.data().desc,
                        precio: item.data().precio,
                        categoria: item.data().categoria,
                        stock: item.data().stock,
                        imagen: item.data().imagen,
                    }); 
                });
                setProductos(itemsAux);
                setCargando(false);
            })
        } else {
            const items =allItem()
            items.then((data) => {
                const itemsAux=[]
                data.forEach(item => {
                    itemsAux.push({
                        id:item.id, 
                        nombre: item.data().nombre, 
                        desc: item.data().desc,
                        precio: item.data().precio,
                        categoria: item.data().categoria,
                        stock: item.data().stock,
                        imagen: item.data().imagen,
                    });
                });
                setProductos(itemsAux);
                setCargando(false);
            })
             
        }
       /*  const productos = () => {
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
            
        }) */
    },[categoria])

    return(
        <>
        <h1 className="btn-rosa text-center text-capitalize">{categoria}</h1>
        {cargando ? <SpinnerGlobal></SpinnerGlobal>
             :
        
        productos.map((producto)=> 
            <Item key={producto.id} nombre={producto.nombre} desc={producto.desc} precio={producto.precio} categoria={producto.categoria} stock={producto.stock} imagen={producto.imagen} id={producto.id}/>
        )
        
        }
        </>
    )
}

export default ItemList