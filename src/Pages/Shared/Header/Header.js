import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../Assets/images/logo/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar expand="lg" className='align-items-center py-3'>
            <Container>
                <Navbar.Brand href="" className='align-items-center'>
                    <img
                        alt=""
                        src={logo}
                        width="85"
                        height="30"
                        className="d-inline-block"
                    />
                    <FontAwesomeIcon icon={faPlane} className='ms-1' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-content-evenly'>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>

                    <Nav
                        className="my-2 my-lg-0 justify-content-evenly"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">News</Nav.Link>
                        <Nav.Link href="#action2">Destination</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>

                    <Button variant="outline-success">Login</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;