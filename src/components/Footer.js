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
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="https://www.instagram.com/horizon.labs/"><small>Instagram</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="https://twitter.com/horizonlabsinc"><small>Twitter</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href=""><small>Linkedin</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><small>Whatsapp</small></a></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <p className="paragraph3">Páginas</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="/planos"><small>Pacotes</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="/about"><small>Sobre</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="/contato"><small>Contato</small></a></ListGroup.Item>
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
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="/planos"><small>Pequeno</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="/planos"><small>Mensal</small></a></ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor: 'black', color: '#fff', marginTop: '-8px'}}><a href="/planos"><small>Completo</small></a></ListGroup.Item>
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