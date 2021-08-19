import ItemCount from '../../ItemCount'
import { Card, Button } from 'react-bootstrap'

const ItemDetail = ({nombre, desc, precio, categoria, stock, negocio}) => {
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
           <ItemCount stock={stock}/>
       </Card.Body>
       </Card>
       </div>
      
        
       </>
    )
}

export default ItemDetail
