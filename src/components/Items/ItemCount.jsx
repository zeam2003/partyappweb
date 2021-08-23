import React, { useEffect, useState } from 'react'
import {Button, Container, Row } from 'react-bootstrap'


export default function ItemCount ({ stock, onAdd = () => {}}) {
    const [ stockPropio, setStock ] = useState(stock)
    const [ unidades, setUnidades ] = useState(0)

    const handleStock = {
        sumaStock:() => {
            if(stockPropio === 0 ) {
                alert('No hay mas Stock disponible')
            } else {
                setUnidades(unidades+1)
                setStock(stockPropio-1)
                
            }
        },
        restaStock:() => {
            if(unidades === 0) {
               alert('Debes comprar al menos 1 unidad')
            } else {
                setUnidades(unidades-1)
                setStock(stockPropio+1)
                
            }
        }
        
    }

    useEffect(() => {
        onAdd(unidades)
        console.log(unidades)
    }, [unidades])


    return(
        <Container fluid>
            <Row>
                <div className="text-center">
                    <Button onClick={handleStock.sumaStock}  disabled={stockPropio === '0'} variant="outline-secondary">+</Button>
                    
                    <div className="inlineB counter1"><span>{unidades}</span>  </div>{''}
                    <Button onClick={handleStock.restaStock}  disabled={stockPropio === '0'} variant="outline-secondary">-</Button>{' '}
                    <p>Stock Disponible: {stock}</p>
                    <p>{unidades}</p>
                    </div>
            </Row>
        </Container> 
    )
}

