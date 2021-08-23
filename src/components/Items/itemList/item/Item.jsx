import ItemCount from '../../ItemCount'
import { Card, Button,Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function Item({nombre, desc, precio, categoria, stock, id}) {
    const [itemVisible, setItemVisible] = useState(true)
    const [cartButtonsVisible, setCartButtonsVisible] = useState(true)
    const [cartBuyVIsible, setCartBuyVisible] = useState(true)
    const [itemsCount, setItemsCount] = useState(0)
    const history = useHistory()

    const onAdd = (count) => {

    setItemsCount(count)
    console.log(count)
    console.log('se ejecuto');
    }

    const onAddToCart = () => {
    if (itemsCount != 0) {
        setItemVisible(false)
        setCartButtonsVisible(false)
        setCartBuyVisible(false)

    } else {
        alert('Debes agregar al menos una unidad')

    }

    }


    const onFinishBuy = () => {
        console.log('Finalice mi compra');
        setCartBuyVisible(true)
        history.push('/cart')
    }

    return ( 
       <>
       <div>
            
            <Card className="text-center">
           
            <Card.Header className="text-capitalize">{categoria}</Card.Header>
            
            <Card.Body>
            <Link to={`/${categoria}/${id}`}>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                {desc}
                </Card.Text>
            </Link>    
                <Card.Text>
                ${precio}
                </Card.Text>
                {itemVisible && <ItemCount stock={stock} onAdd={onAdd}/>}{''}
                {cartButtonsVisible && <Button onClick={onAddToCart} className="inlineB" variant="warning">Agregar al carrito</Button>}
                
                {!cartBuyVIsible && <Button onClick={onFinishBuy}>Finalizar Compra</Button>}
                
                {itemsCount}
            </Card.Body>
            </Card>
     
      
       </div>
       </>
    )
    
}

