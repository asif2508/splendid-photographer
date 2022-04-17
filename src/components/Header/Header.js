import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar className='nav-style' variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='logo'>Splendid Photographer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home' href="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to='/blogs' href="#blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to='/about' href="#about">About</Nav.Link>
                            {
                                user ? 
                                <Nav.Link onClick={()=>signOut(auth)} as={Link} to='/home' href="#login">Logout</Nav.Link>
                                :
                                <Nav.Link as={Link} to='/login' href="#login">Login</Nav.Link>
                            }
                            {
                                user ?
                                ""
                                :
                                <Nav.Link as={Link} to='/register' href="#register">Register</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;