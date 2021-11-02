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
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Instagram</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Facebook</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Linkedin</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Whatsapp</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <p className="paragraph3">Páginas</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Pacotes</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Sobre</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Contato</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Portfólio</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <p className="paragraph3">Conteúdo</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>YouTube</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Podcast</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Blog</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    
                    <Col>
                        <p className="paragraph3">Planos</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Pequeno</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Mensal</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a><small>Completo</small></a></ListGroup.Item>
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