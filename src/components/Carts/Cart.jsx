
import { useContext } from "react"
import { CustomContext } from "../Contexts/CartContext"


export default function Cart() {
    const value = useContext(CustomContext)
    
    return (
        <>
            
            <div className="text-center">
                <h1 className="tamaño-25">Hola Cart</h1>
                <p>item: {value.item}</p> 
                <p>cantidad: {value.cantidad}</p> 
            </div>
            
            
            

        </>
    )
}

