import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer">
            <Container style={{marginBottom: '50px'}}>
                <Row style={{marginTop: '70px', marginBottom: '30px', textAlign: 'left'}}>
                    <Col>
                        <p className="paragraph3">Redes sociais</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Instagram</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Facebook</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Linkedin</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Whatsapp</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <p className="paragraph3">Páginas</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Pacotes</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Sobre</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Contato</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Portfólio</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <p className="paragraph3">Conteúdo</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>YouTube</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Podcast</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Blog</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    
                    <Col>
                        <p className="paragraph3">Planos</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Pequeno</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Mensal</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Completo</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <br></br>
                <small>&copy; Horizon Labs 2021</small>
            </Container>
        </div>
    )
}

export default Footer;