import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import {Helmet} from "react-helmet";


const seo = {
    title: 'Planos Horizon Labs',
    description: 'Somos um laboratório de ideias tecnológicas que programa softwares e sistemas para as necessidades dos nossos clientes.',
    url: '',
    image: 'img/horizon.png',
}


function Packages() {
    return (
        <>
        <Helmet
            title={`${seo.title}`}
            meta={[
                { name: 'description', property: 'og:description', content: seo.description },
                { property: 'og:title', content: `${seo.title} | Code Mochi` },
                { property: 'og:url', content: seo.url },
                { property: 'og:image', content: seo.image },
                { property: 'og:image:type', content: 'image/jpeg' },
                { property: 'twitter:image:src', content: seo.image },
                { property: 'twitter:title', content: `${seo.title} | Code Mochi` },
                { property: 'twitter:description', content: seo.description },
        ]} />
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
                
                <Row style={{marginTop: '40px', marginBottom: '40px', justifyContent: 'center'}} className="mar" align="center">
                    <p className="paragraph3" style={{justifyContent: 'center'}}>Empresas que contratam a Horizon Labs regularmente:</p>
                    <Col md='auto' xs>
                        <a href="http://arcapericia.com.br/" target='_blank'>
                        <img src="img/arca.png" className="pics" style={{height: '70px', width: '70px'}} />
                        
                        </a>
                    </Col>

                    <Col md='auto' xs>
                        <a href="https://blogme.site/home" target='_blank'>
                        <img src="img/blogme.png" className="pics" style={{height: '70px', width: '70px'}} />
                        
                        </a>
                    </Col>

                    <Col md='auto' xs>
                        <a href="https://australiaestudios.herokuapp.com/" target='_blank'>
                        <img src="img/australia.png" className="pics" style={{height: '70px', width: '70px'}} />
                        
                        </a>
                    </Col>

                    <Col md='auto' xs>
                        <a href="/">
                        <img src="img/horizon.png" className="pics" style={{height: '70px', width: '70px'}} />
                        
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>


        <div className="models">
            <Container style={{marginBottom: '90px'}}>
                <Row style={{marginTop: '90px', marginBottom: '40px'}} className="mar">
                    <Col sm>
                        <h2 className="titulo3" style={{}}>O seu digital está aqui</h2>
                        <br></br>
                        <br></br>
                        <p className="paragraph3" style={{textAlign: 'justify', margin: '12px'}}>Os nosso pacotes de serviços são voltados para pequenos negócios e envolvem criação, manuntenção e design de websites, SEO para que sua empresa fique bem nos rankings do Google, blog empresarial, gestão de mídias socias, tráfego pago e mais.</p>
                        <br></br>
                    </Col>
                </Row>

                <Row className="mar">
                    <Col md='auto'>
                        <Card style={{marginLeft: '8px', marginRight: '8px', marginTop: '40px', marginBottom: '40px', alignItems: 'center', backgroundColor: '#0a0a0a', borderRadius: '10px', width: '270px'}}>
                            <Card.Body>
                                <h1 className="" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>⭐</h1>
                                <br></br>
                                <h1 className="titulo3">Assinatura de website/landing page</h1>
                                <small style={{margin: '12px'}}>O pacote mais vendido ⭐</small>
                                <hr style={{margin: '12px'}}></hr>
                                <br></br>
                                <ListGroup variant="flush" align="justify">
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Design profissional ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>SEO para vender + ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Site dinâmico e rápido ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>+ Conversões e clientes ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Manutenção incluída ✔️</ListGroup.Item>
                                </ListGroup>
                                <br></br>
                                <a href="#assinatura"><button style={{margin: '12px'}}>Ver mais</button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md='auto'>
                        <Card style={{marginLeft: '8px', marginRight: '8px', marginTop: '40px', marginBottom: '40px', alignItems: 'center', backgroundColor: '#0a0a0a', borderRadius: '10px', width: '270px'}}>
                            <Card.Body>
                                <h1 className="" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>💻</h1>
                                <br></br>
                                <h1 className="titulo3">Website profissional completo</h1>
                                <hr style={{margin: '12px'}}></hr>
                                <br></br>
                                <ListGroup variant="flush" align="justify">
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Todo o plano anterior ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Design personalizado ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Blog empresarial ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Site 100% sob medida ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Criação de marca online ✔️</ListGroup.Item>
                                </ListGroup>
                                <br></br>
                                <a href="#desenvolvimento"><button style={{margin: '12px'}}>Ver mais</button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md='auto'>
                        <Card style={{marginLeft: '8px', marginRight: '8px', marginTop: '40px', marginBottom: '40px', alignItems: 'center', backgroundColor: '#0a0a0a', borderRadius: '10px', width: '270px'}}>
                            <Card.Body>
                                <h1 className="" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🔥</h1>
                                <br></br>
                                <h1 className="titulo3">Marketing e edição de vídeos</h1>
                                <hr style={{margin: '12px'}}></hr>
                                <br></br>
                                <ListGroup variant="flush" align="justify">
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Edição de vídeos ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Tráfego pago Facebook ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Criação de artes e posts ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Design e social media ✔️</ListGroup.Item>
                                    <ListGroup.Item style={{backgroundColor: '#0a0a0a', color: '#fff'}}>Consultoria digital ✔️</ListGroup.Item>
                                </ListGroup>
                                <br></br>
                                <a href="#marketing"><button style={{margin: '12px'}}>Ver mais</button></a>
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
