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
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Instagram</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Facebook</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Linkedin</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Whatsapp</small></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <p className="paragraph3">Páginas</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Pacotes</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Sobre</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Contato</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Portfólio</small></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <p className="paragraph3">Conteúdo</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>YouTube</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Podcast</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Blog</small></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    
                    <Col>
                        <p className="paragraph3">planos</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Pequeno</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Mensal</small></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff', margin: '0px'}}><small>Completo</small></ListGroup.Item>
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