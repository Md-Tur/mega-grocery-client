import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/log.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <span>Mega Grocery</span>
                    <img height={40} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Manage Items</Nav.Link>
                        <Nav.Link href="#pricing">Add Items</Nav.Link>
                        <Nav.Link href="#pricing">My Items</Nav.Link>
                        <Nav.Link href="#pricing">Suggestions</Nav.Link>
                        <Nav.Link href="#pricing">Outlets</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Blogs</Nav.Link>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;