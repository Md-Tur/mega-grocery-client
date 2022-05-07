import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <span>Mega Grocery</span>
                    <img height={45} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/manageitems">Manage Items</Nav.Link>
                        <Nav.Link as={Link} to="/additems">Add Items</Nav.Link>
                        <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;