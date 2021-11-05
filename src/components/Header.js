import React from 'react'
import { withRouter } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import { FirebaseContext } from '../firebase'


function Header() {

    const {user, firebase} = React.useContext(FirebaseContext)

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{backgroundColor: "#0a0a0a", color: "#fff",}}>
            <Navbar.Brand style={{marginLeft: 20}} href="/">Horizon Labs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={{marginLeft: 20}} href="/about">Sobre</Nav.Link>
                    <Nav.Link style={{marginLeft: 20}} href="/planos">Planos</Nav.Link>
                    <Nav.Link style={{marginLeft: 20}} href="/contato">Contato</Nav.Link>
                    {/*{user && (
                        <>
                        <NavDropdown title='perfil' id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => firebase.logout()}>Sair</NavDropdown.Item>
                            <NavDropdown.Item href='/create'>Criar post</NavDropdown.Item>
                        </NavDropdown>
                        </>
                    )}*/}
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);