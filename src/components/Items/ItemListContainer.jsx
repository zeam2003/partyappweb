import './ItemListContainer.css'

export default function ItemListContainer(props) {
    return (
        <>
            <div>
                <h1 className="tamaño-25">{props.text}</h1>
            </div>
        </>
    )
}