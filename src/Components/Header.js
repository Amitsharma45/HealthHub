import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
            <Container fluid>
                <Navbar.Brand  ><Link to='/' style={{ color: 'White', textDecoration: 'none' }}> Health Hub </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About US</Nav.Link>
                    </Nav>
                    <Nav style={{ color: 'white', marginRight: '80px' }}>
                        <NavDropdown title="Patient" id="collasible-nav-dropdown"  >
                            <NavDropdown.Item >
                                <Link to='/patient-login' style={{ color: 'black', textDecoration: 'none' }}> Login </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item  >
                                <Link to='/patient-register' style={{ color: 'black', textDecoration: 'none' }}> Register</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Doctor" id="collasible-nav-dropdown">
                            <NavDropdown.Item >
                                <Link to='/doctor-login' style={{ color: 'black', textDecoration: 'none' }}> Login </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='/doctor-register' style={{ color: 'black', textDecoration: 'none' }}> Register</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;