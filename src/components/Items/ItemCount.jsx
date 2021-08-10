import { useState } from 'react'
import './ItemCount.css'

const useCounter = (initialValue = 1, stock = 10 ) => {
    const [count, setCount] = useState(initialValue)
   

    const increment = () => {
            if (count < stock ) {
                setCount(count+1)
            }
        
    }

    const decrement = () => {
        if ( count > 0 ) setCount(count-1)
    }

   

    return {
        count,
        increment,
        decrement,
        stock
    }

   
}





export default function ItemCount( { onAdd = () => {}}) {

    const [agregadoCarrito, setAgregadoCarrito] = useState(false)

    const handleOnAddCart = ( event ) => {
        if( count > 0 ) {
           
            setAgregadoCarrito(true)
            console.log(agregadoCarrito);
            onAdd(event)
            console.log(stock);
            
            
        }
    }

    const handleReset = (event ) => {
        setAgregadoCarrito(false)
        onAdd(event)


    }
    

    const {count, stock, increment, decrement} = useCounter()
    return(
        <>
            <button onClick={() => decrement()}>-</button>
            <button onClick={() => increment()}>+</button>
            <div>{count}</div>
            <div><h4>Disponibles: {stock}</h4></div>
           
            {!agregadoCarrito && <button onClick={handleOnAddCart}>Agregar al Carrito</button>}
            {agregadoCarrito && <button onClick={handleReset}>Deshacer</button>}
      
        </>
    )

}