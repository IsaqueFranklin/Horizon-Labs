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
                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale2">Contratar agora</button></a>
            </div>
        </div>


        <div className="companies" style={{justifyContent: 'center'}}>
            <Container style={{marginTop: '40px'}}>
                <p className="paragraph3" style={{justifyContent: 'center'}}>Empresas que contratam a Horizon Labs</p>
                <Row style={{marginTop: '40px', marginBottom: '40px', justifyContent: 'center'}}>
                    <Col md='auto'>
                        <a href="http://arcapericia.com.br/" target='_blank'>
                        <img src="img/arca.png" className="pics" style={{height: '100px', width: '100px', margin: '15px'}} />
                        <p className="paragraph3">Arca Perícia</p>
                        </a>
                    </Col>

                    <Col md='auto'>
                        <a href="https://blogme.site/home" target='_blank'>
                        <img src="img/blogme.png" className="pics" style={{height: '100px', width: '100px', margin: '15px'}} />
                        <p className="paragraph3">Blogme News</p>
                        </a>
                    </Col>

                    <Col md='auto'>
                        <a href="https://australiaestudios.herokuapp.com/" target='_blank'>
                        <img src="img/australia.png" className="pics" style={{height: '100px', width: '100px', margin: '15px'}} />
                        <p className="paragraph3">Austrália Estúdios</p>
                        </a>
                    </Col>

                    <Col md='auto'>
                        <a href="/">
                        <img src="img/horizon.png" className="pics" style={{height: '100px', width: '100px', margin: '15px'}} />
                        <p className="paragraph3">Horizon Labs</p>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>


        <div className="models">
            <Container style={{marginBottom: '90px'}}>
                <Row style={{marginTop: '90px', marginBottom: '40px'}}>
                    <Col sm>
                        <h2 className="titulo3" style={{}}>O seu digital está aqui</h2>
                        <br></br>
                        <br></br>
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
                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale2" style={{margin: '12px'}}>Contratar um dos planos</button></a>
            </Container>
        </div>

        <div className="products">
            <Container style={{marginBottom: '90px'}}>
                <Row>
                    <Col md='auto' style={{marginTop: '50px'}}>
                        <img className="pics" src='img/app.png' style={{width: '300px', height: '300px'}} />
                    </Col>

                    <Col sm style={{marginTop: '90px', marginRight: '80px', alignItems: 'left', justifyContent: 'left'}}>
                        <h2 className="titulo3" style={{}}>Softwares e aplicativos</h2>
                        <br></br>
                        <p className="paragraph3">Nós desenvolvemos seus apps e sistemas/softwares personalizados de acordo com suas necessidades e com nossa tecnologia própria. Nós já temos aplicativos publicados para androis e diversos sistemas web desenvolvidos para os mais diversos propósitos.</p>
                        <br></br>
                        <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20gostaria%20de%20negociar%20um%20software%20personalizado%20com%20a%20Horizon%20Labs!" style={{margin: '12px'}}><button className="">Quero meu sistema</button></a>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Packages
