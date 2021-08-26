import { useContext } from "react"
import { CustomContext } from "../Contexts/CartContext"


export default function Inicio() {

    const obj = useContext(CustomContext)
    return(
        
        <>
        
        <div className="text-center">
                <h1 className="tamaño-25">El inicio de momento esta vacio</h1>
                <h3 className="tamaño-25">Prueba en categorias</h3>

                {obj.hayAlgo ? <div> Hola {obj.item}</div> : <div>
                usuario no logueado
                </div>}
            </div>
        </>
    )
}


