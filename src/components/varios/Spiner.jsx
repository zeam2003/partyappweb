import { Spinner } from 'react-bootstrap'

const SpinnerGlobal = () => {
    return(
        <>
        <div className="spinner-center">
        <Spinner animation="border" variant="primary" size="lg"></Spinner><span > Cargando...</span>
        </div>
        
        </>
    )

}

export default SpinnerGlobal

