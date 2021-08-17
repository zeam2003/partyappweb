import { useEffect, useState } from "react";
import Item from "./Item";

const getData = () => {

    return fetch('https://api.mercadolibre.com/sites/MLA/search?q=goku')
    .then(response => {
        return response.json()
    })
    /* setTimeout(() => {
         fetch('https://api.mercadolibre.com/sites/MLA/search?q=goku'
                 
        ).then( response => {
            console.log(response);
            return response.json()
        })
    }, 1000); */
    
} 




export default function ItemList() {

    const [itemList, setItemList] = useState([])

    useEffect(async () => {
        const data = await getData()
        const arr = []
        // console.log(data);
        data.results.forEach( item => {
            arr.push(<Item key={item.id} title={item.title} description={item.currency_id} price={item.price} pictureUrl={item.thumbnail}/>)
        })
        setItemList(arr)
    }, [])

    
    return(
        <>
            {itemList}
        </>
    )   
}