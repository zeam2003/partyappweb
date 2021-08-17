import './item.css'
export default function Item({id, title, description, price, pictureUrl}) {
    return ( 
        <>
        <div className="itemBox">
            <div >Titulo: {title}</div>
            <div >Descripción: {description}</div>
            <div >Precio: ${price}</div>
            <div >Link Imagen: {pictureUrl}</div>
        </div>
        
        </>
    )
}