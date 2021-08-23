import {Nav, Navbar, Container,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return ( 
        <>
        <Navbar collapseOnSelect className="shadow-sm rounded"  expand="lg" variant="light">
        <Container>
        <Navbar.Brand as={Link} to={"/"} >
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo_280x120v3.png`}  className="d-inline-block align-top" alt="Party-App" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto fuente-Nav">
            <Nav.Link as={Link} to={"/"} >Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to={"/catering"}>Catering</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/cotillon"}>Cotillon</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/empanadas"}>Empanadas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/pizzas"}>Pizzas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/tortas"}>Tortas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  as={Link} to={"/mispedidos"}>Mis Pedidos</Nav.Link>
            <Nav.Link as={Link} to={"/tunegocio"}>Tu Negocio</Nav.Link>
            <Nav.Link as={Link} to={"/contacto"}>Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/cart"}>Cart</Nav.Link>
            <Nav.Link as={Link} to={"/ingresar"}>Ingresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}