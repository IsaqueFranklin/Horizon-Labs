import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

function Home() {
    return (
        <>
        <div className="frontbanner">
            <div className="frontWords">
                <h1 className="titulo">Horizon labs</h1>
                <h4 className="paragraph">Soluções modernas para sua empresa</h4>
                <br></br>
                <a href=""><button className="buttonSale2">Fale com os programadores</button></a>
            </div>
        </div>

        <div className="about" id="#about">
            <Container>
                <Row style={{marginBottom: '80px'}}>
                    <Col md="auto" style={{alignItems: 'center', justifyContent: 'center'}}>
                        <h1 className="pics" style={{fontSize: '170px', marginTop: '70px', marginLeft: '60px', marginRight: '30px'}}>💡</h1>
                    </Col>
                    <Col sm>
                        <h2 className="titulo3" style={{marginTop: '100px', marginBottom: '20px'}}>A Horizon Labs</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'justify'}}>Somos um laboratório de ideias tecnológicas que desenvolve softwares e estratégias digitais. Nossas soluções são programadas com nossa tecnologia própria e por isso possuem melhor adaptabilidade e desempenho. 💡✨</p>
                        <br></br>
                        <a href=""><button style={{margin: '12px'}}>Conversar com a equipe</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="services" id="#services">
            <Container style={{marginTop: '70px', marginBottom: '70px'}}>
                <h2 className="titulo3" style={{marginBottom: '30px'}}>Como a Horizon pode te ajudar a lucrar mais?</h2>
                <br></br>
                <Row style={{alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                    <Col style={{marginLeft: '30px', marginRight: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🖥️</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Criamos seu site com tecnologia própria e não por meio de outras plataformas do mercado, por isso temos menos problemas técnicos.</p>
                    </Col>
                        
                    <Col style={{marginLeft: '30px', marginRight: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🌎</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Trabalhamos o SEO do seu site para que ele possa ficar bem localizado em todos os rankins de pesquisa e ser descoberto por mais potenciais clientes.</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🚀</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Alavancar a produção de conteúdo da sua empresa e torná-la conhecida e uma referência de atuaçã. Fazemos isso por meio da nossa estratégia digital.</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>💸</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Aumentar seu lucro, conhecimento da marca, fama e organizar a estratégia digital da empresa. Tudo isso por uma taxa mensal menor que meio salário minímo. 😁</p>
                    </Col>
                </Row>
                <br></br>
                <a href=""><button className="buttonSale">Eu quero vender mais</button></a>
            </Container>
        </div>

        <div className="packages" id="#packages">
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

                <p className="paragraph3" style={{marginBottom: '40px'}}>Nós também criamos softwares personalizados para você e para a sua empresa, sistemas e aplicativos específicos para suas necessidades. Entre em contato agora mesmo e peça um orçamento.</p>
                <a href=""><button className="buttonSale2" style={{margin: '12px'}}>Conversar com a equipe</button></a>
            </Container>
        </div>

        <div className="social">
            <Container style={{marginTop: '70px', marginBottom: '70px'}}>
                <h1 className="titulo3">Você quer que sua empresa te traga mais clientes de forma automática?</h1>
                <br></br>
                <a href=""><button className="buttonSale2">Entrar em contato agora</button></a>
            </Container>
        </div>

        <div className="products">
            <Container style={{marginBottom: '90px'}}>
                <Row>
                    <Col md='auto' style={{marginTop: '50px'}}>
                        <img className="pics" src='img/app.png' style={{width: '300px', height: '300px'}} />
                    </Col>

                    <Col sm style={{marginTop: '90px', marginRight: '80px', alignItems: 'left', justifyContent: 'left'}}>
                        <h2 className="titulo3" style={{}}>Personalize seu pacote</h2>
                        <br></br>
                        <p className="paragraph3">Se os nosso pacotes padrão não te atendem, entre em contato com conosoco para negocias um pacote personalizado para sua empresa/negócio.</p>
                        <br></br>
                        <a href="" style={{margin: '12px'}}><button className="">Personalizar</button></a>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Home
