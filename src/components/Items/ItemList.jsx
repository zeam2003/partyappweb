import { useEffect, useState } from "react";
import Item from "./Item";

const getData = () => {
    setTimeout(() => {
        return fetch({
           
            id: '1',
            title: 'Cinturon',
            description: 'Cuero Vaca Negro',
            price: 50,
            pictureUrl: 'http://www.youtube.com'        
        }).then( response => {
            //console.log(response);
            return response.json()
            
        })
    }, 1000);
    
} 




export default function ItemList() {

    const [value, setValue] = useState([])

    useEffect( async () => {
        const data = await getData()
        const arr = []
        data.results.forEach( item => {
            
            arr.push(<Item key={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>)
            
        })
        setValue(arr)
    },[])

    
    return(
        <>
        {value}
    
        </>
    )   
}