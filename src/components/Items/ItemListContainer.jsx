import ItemCount from '../Items/ItemCount'
import ItemList from '../Items/itemList/ItemList'
import {Button, Container, Row, Col } from 'react-bootstrap'

export default function ItemListContainer(props) {

    
    return (
        <>
            
            <div className="text-center">
                <h1 className="tamaño-25">{props.text}</h1>
            </div>
            <ItemCount stock='5'></ItemCount>
            
            <Row>
            <Col md={12}>
            <ItemList/>
            </Col>
            </Row>
            
            

        </>
    )
}