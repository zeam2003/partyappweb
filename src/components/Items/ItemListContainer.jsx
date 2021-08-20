
import ItemCount from '../Items/ItemCount'
import ItemList from '../Items/itemList/ItemList'
import ItemDetailContainer from './itemDetailContainer/ItemDetailContainer'

export default function ItemListContainer(props) {

    
    return (
        <>
            <div className="text-center">
                <h1 className="tamaño-25">{props.text}</h1>
            </div>
            <ItemCount stock='5'></ItemCount>
            <ItemList/>
            {/*<ItemDetailContainer />*/}
        </>
    )
}