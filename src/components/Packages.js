import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'


function Packages() {
    return (
        <>
        <div className="frontbannerPackage">
            <div className="frontWords">
                <h1 className="titulo">Pacotes</h1>
                <h4 className="paragraph">Todos os planos da Horizon</h4>
                <br></br>
                <a href=""><button className="buttonSale2">Contratar agora</button></a>
            </div>
        </div>

        <div className="models">
            <Container style={{marginBottom: '90px'}}>
                <Row style={{marginTop: '90px', marginBottom: '40px'}}>
                    <Col sm>
                        <h2 className="titulo3" style={{}}>O seu digital está aqui</h2>
                        <p className="paragraph3" style={{textAlign: 'justify', margin: '12px'}}>Os nosso pacotes de serviços são voltados para pequenos negócios e envolvem criação, manuntenção e design de websites, SEO para que sua empresa fique bem nos rankings do Google, blog empresarial, gestão de mídias socias, tráfego pago e mais.</p>
                        <br></br>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card style={{marginLeft: '12px', marginRight: '12px', marginTop: '40px', marginBottom: '40px', alignItems: 'center', backgroundColor: '#0a0a0a', borderRadius: '10px', width: '300px'}}>
                            <Card.Body>
                                <h1 className="" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>⭐</h1>
                                <br></br>
                                <h1 className="titulo3">Pacote pequeno</h1>
                                <small style={{margin: '12px'}}>O pacote mais vendido ⭐</small>
                                <hr style={{margin: '12px'}}></hr>
                                <br></br>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Website profissional ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Blog empresarial ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Palavras-chave selecionadas ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Manutenção por 3 meses ✔️</ListGroup.Item>
                                </ListGroup>
                                <br></br>
                                <a href="/planos"><button style={{margin: '12px'}}>ver todos os planos</button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{marginLeft: '12px', marginRight: '12px', marginTop: '40px', marginBottom: '40px', alignItems: 'center', backgroundColor: '#0a0a0a', borderRadius: '10px', width: '300px'}}>
                            <Card.Body>
                                <h1 className="" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>💻</h1>
                                <br></br>
                                <h1 className="titulo3">Pacote mensal</h1>
                                <hr style={{margin: '12px'}}></hr>
                                <br></br>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Todo o pacote pequeno +</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Gestão de mídias sociais ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Manutenção perpétua✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Tráfego pago ✔️</ListGroup.Item>
                                </ListGroup>
                                <br></br>
                                <a href="/planos"><button style={{margin: '12px'}}>ver todos os planos</button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{marginLeft: '12px', marginRight: '12px', marginTop: '40px', marginBottom: '40px', alignItems: 'center', backgroundColor: '#0a0a0a', borderRadius: '10px', width: '300px'}}>
                            <Card.Body>
                                <h1 className="" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🔥</h1>
                                <br></br>
                                <h1 className="titulo3">Pacote completo</h1>
                                <hr style={{margin: '12px'}}></hr>
                                <br></br>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Todo o pacote mensal +</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Criação de conteúdo no blog ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>tráfego pago ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Consultoria em Marketing ✔️</ListGroup.Item>
                                </ListGroup>
                                <br></br>
                                <a href="/planos"><button style={{margin: '12px'}}>ver todos os planos</button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <a href=""><button className="buttonSale2" style={{margin: '12px'}}>Conversar com a equipe</button></a>
            </Container>
        </div>

        <div className="products">

        </div>

        <div className="companies">

        </div>
        </>
    )
}

export default Packages
