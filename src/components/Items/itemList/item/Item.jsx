import ItemCount from '../../ItemCount'
import { Card, Button,Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function Item({nombre, desc, precio, categoria, imagen, stock, id}) {
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
       
       <Row className="justify-content-md-center">
       
         <Col lg={4}>
           <Card key={id} className="mt-5 mb-3">
             <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/${imagen}`} />
             <Card.Body>
               <Card.Title className="text-color-verde1">{nombre}</Card.Title>
               <Card.Text className="text-color-verde2">
                 {desc}
               </Card.Text>
               <Card.Text className="text-primary">
                 $ {precio}
               </Card.Text>
               {itemVisible && <ItemCount stock={stock} onAdd={onAdd}/>}{''}
               {cartButtonsVisible && <Button onClick={onAddToCart} variant="warning" size="lg" className="btn-block mr-1 mt-1"  >Agregar al carrito</Button>}
               
               {!cartBuyVIsible && <Button onClick={onFinishBuy}>Finalizar Compra</Button>}
             </Card.Body>
           </Card>
         </Col>
      
     </Row>

      
       </>
    )
    
}

