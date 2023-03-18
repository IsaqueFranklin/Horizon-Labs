import React from 'react'
import { withRouter } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import { FirebaseContext } from '../firebase'


function Header() {

    const {user, firebase} = React.useContext(FirebaseContext)

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{backgroundColor: "#010107", color: "#fff",}}>
            <Navbar.Brand className="logo" style={{marginLeft: 20, fontSize: 28, fontFamily: 'Poppins'}} href="/">Horizon Labs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/*<Nav.Link style={{marginLeft: 20}} href="/about">Sobre</Nav.Link>*/}
                    <Nav.Link className="header" href="/"><button>Blog</button></Nav.Link>
                    {/*<Nav.Link style={{marginLeft: 20, color: '#fff'}} href="/planos">Planos</Nav.Link>
                    <Nav.Link style={{marginLeft: 20, color: '#fff'}} href="/contato">Contato</Nav.Link>*/}
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