import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand to="/" as={NavLink}>Digital Hub</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/category/Computacion" as={NavLink}>Computacion</Nav.Link>
                        <Nav.Link to="/category/Componentes" as={NavLink}>Componentes</Nav.Link>
                        <Nav.Link to="/category/Perisfericos" as={NavLink}>Perisfericos</Nav.Link>
                    </Nav>
                <CartWidget />
            </Container>
        </Navbar>
        </>
    );
};