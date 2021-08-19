import React, { useState } from 'react'
import {Button, Container, Row } from 'react-bootstrap'


const ItemCount = (props) => {

    const [ stock, setStock ] = useState(props.stock)
    const [ unidades, setUnidades ] = useState(0)

    const [show, setShow] = useState(false);

    const handleStock = {
        sumaStock:() => {
            if(stock === 0 ) {
                alert('No hay mas Stock disponible')
            } else {
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:() => {
            if(unidades === 0) {
               alert('Debes comprar al menos 1 unidad')
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    }


    return(
        <Container fluid>
            <Row>
                <div className="text-center">
                    <Button onClick={handleStock.sumaStock} disabled={stock === '0'} variant="outline-secondary">+</Button>{' '}
                    <p>{unidades}</p>
                    <Button onClick={handleStock.restaStock} disabled={stock === '0'} variant="outline-secondary">-</Button>{' '}
                    <p>Stock Disponible: {stock}</p>
                    </div>
            </Row>
        </Container> 
    )
}

export default ItemCount