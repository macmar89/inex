import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'

const TheNavigation = () => {
    return (
        <Navbar bg="secondary" expand="md">
            <div className="container">
                <Link className="navbar-brand" to='/homepage'>INEX DECOR</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to='/homepage'><AiIcons.AiOutlineHome />Homepage</Link>
                        <Link className="nav-link menulinks" to='/referencie'>Referencie</Link>
                        <Link className="nav-link" to='/kontakt'>Kontakt</Link>
                        <NavDropdown title="Galeria" id="basic-nav-dropdown">
                            <NavDropdown.Item to="dvere">Dvere</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>

        </Navbar>
    )
}

export default TheNavigation