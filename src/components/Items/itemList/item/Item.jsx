import ItemCount from '../../ItemCount'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({nombre, desc, precio, categoria, stock, id}) => {
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
                <ItemCount stock={stock}/>
            </Card.Body>
            </Card>
     
      
       </div>
       </>
    )
}

export default Item
