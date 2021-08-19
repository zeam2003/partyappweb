import {Nav, Navbar, Container,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return ( 
        <>
        <Navbar collapseOnSelect className="shadow-sm rounded"  expand="lg" variant="light">
        <Container>
        <Navbar.Brand href="#home">
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo_280x120v3.png`}  className="d-inline-block align-top" alt="Party-App" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto fuente-Nav">
            <Nav.Link ><Link to="/"></Link>Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
    
            <NavDropdown.Item ><Link to="/catering">Catering</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/cotillon">Cotillon</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/empanadas">Empanadas</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/pizzas">Pizzas</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/tortas">Tortas</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link to="/">Mis Pedidos</Link></Nav.Link>
            <Nav.Link ><Link to="/">Tu Negocio</Link></Nav.Link>
            <Nav.Link ><Link to="/">Contacto</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Ingresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}