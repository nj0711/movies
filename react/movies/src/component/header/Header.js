import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Button } from "bootstrap"
import { Container } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ "color": "gold" }}>
                    <FontAwesomeIcon icon={faFilm} /> Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/watchlink">Watch List</NavLink>
                    </Nav>
                    <button className="me-2 btn btn-outline-info" variant="outline-info"> Login</button>
                    <button className="me-2 btn btn-outline-info" variant="outline-info"> Register</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;







