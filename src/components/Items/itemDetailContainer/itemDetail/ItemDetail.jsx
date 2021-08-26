import ItemCount from '../../ItemCount'
import { Card, Button } from 'react-bootstrap'
import { useState,useContext } from 'react'
import { useHistory } from "react-router-dom";
import { CustomContext, listado } from '../../../Contexts/CartContext';

export default function ItemDetail ({nombre, desc, precio, categoria, stock, negocio}) {

    const [itemVisible, setItemVisible] = useState(true)
    const [cartButtonsVisible, setCartButtonsVisible] = useState(true)
    const [cartBuyVIsible, setCartBuyVisible] = useState(true)
    const [itemsCount, setItemsCount] = useState(0)

    const history = useHistory()
    const obj = useContext(CustomContext)


    const onAdd = (count) => {
        
        setItemsCount(count)
        console.log(count)
        console.log('se ejecuto');
    }

    const onAddToCart = () => {
        if( itemsCount !== 0) {
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
        <Card.Header>{categoria}</Card.Header>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
            {desc}
            </Card.Text>
            <Card.Text>
            {negocio}
            </Card.Text>
            <Card.Text>
            ${precio}
            </Card.Text>
            {itemVisible && <ItemCount stock={stock} onAdd={onAdd}/>}{''}
            {cartButtonsVisible && <Button onClick={onAddToCart} className="inlineB" variant="warning">Agregar al carrito</Button>}
            
            {!cartBuyVIsible && <Button onClick={onFinishBuy}>Finalizar Compra</Button>}
            {obj.item}
            {itemsCount}
        </Card.Body>
        </Card>
        </div>
       
         
        </>
     ) 
}


