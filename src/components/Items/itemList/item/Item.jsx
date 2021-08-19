import ItemCount from '../../ItemCount'
import { Card, Button } from 'react-bootstrap'

const Item = ({nombre, desc, precio, categoria, stock}) => {
    return ( 
       <>
       
       <div>
       <Card className="text-center">
       <Card.Header>Titulo: {categoria}</Card.Header>
       <Card.Body>
           <Card.Title>{nombre}</Card.Title>
           <Card.Text>
           {desc}
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

export default Item
