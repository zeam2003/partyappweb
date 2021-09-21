import Carousel  from "react-bootstrap/Carousel";


export default function Inicio() {
    return(
        <>
        <div className="text-center">
            <Carousel variant="dark" indicators = {false}>
                <Carousel.Item>
                    <h3 className="mt-1">Te damos la Bienvenida</h3>
                    <img
                    className="d-block w-50 mx-auto"
                    src={`${process.env.PUBLIC_URL}/assets/images/sl1.png`}
                    alt="First slide"
                    />
    
                </Carousel.Item>
                <Carousel.Item>
                <h4 className="mt-1">¿Tenes que hacer las compras para un cumpleaños y no tenes tiempo para relizarlas?</h4>
                    <img
                    className="d-block w-50 mx-auto"
                    src={`${process.env.PUBLIC_URL}/assets/images/sl2.png`}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <h4 className="mt-1">Podes comprar y recibirlo sin salir de tu casa</h4>
                    <img
                    className="d-block w-50 mx-auto"
                    src={`${process.env.PUBLIC_URL}/assets/images/sl3.png`}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <h4 className="mt-1">Encontrá opciones veganas, veggie y apto celíacos</h4>
                    <img
                    className="d-block w-50 mx-auto"
                    src={`${process.env.PUBLIC_URL}/assets/images/sl4.png`}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}