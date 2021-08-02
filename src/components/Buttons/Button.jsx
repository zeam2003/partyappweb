import './Button.css'

export default function Button(props) {

    const handleClick = ( event ) => {
        console.log(event);
    }
    return ( 
        <>
            <button onClick={handleClick} style={{ backgroundColor: props.backgroundColor}} className="menu"> {props.text} </button> 
        </>
    )
}