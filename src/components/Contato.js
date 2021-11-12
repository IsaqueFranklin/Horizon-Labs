import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function Contato() {
    return (
        <div className="contato">
            <Container style={{marginTop: '70px'}}>
                <h1 className="pics" style={{fontSize: '70px'}}>📱</h1>
                <h2 className="titulo3" style={{marginTop: '20px'}}>Nossos contatos</h2>
                <br></br>
                <p className="paragraph3" style={{marginLeft: '50px', marginRight: '50px', marginTop: '20px'}}>Entre em contato com a Horizon Labs para negociar, pedir informçãoes e afins. Use uma das nossas redes sociais abaixo ou mande um email.</p>
                <br></br>
                <div style={{marginTop: 20, justifyContent:'center', alignItems: 'center'}}>
                    <Row style={{justifyContent: 'center'}}>
                        <Col md='auto'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/instagram.png" alt="instagram" />
                        </Col>

                        <Col md='auto'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/facebook.png" alt="facebook" />
                        </Col>

                        <Col md='auto'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/linkedin.png" alt="linkedin" />
                        </Col>

                        <Col md='auto'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/twitter.png" alt="twitter" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Contato
