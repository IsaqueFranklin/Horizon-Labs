import React from 'react'
import { Container, Row, Col, Card, ListGroup, Carousel } from 'react-bootstrap'
import {Helmet} from "react-helmet";

const seo = {
    title: 'Horizon Labs',
    description: 'Somos um laboratório de ideias tecnológicas que programa softwares e sistemas para as necessidades dos nossos clientes.',
    url: '',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
}


function Home() {
    return (
        <>
        <Helmet
            title={`${seo.title}`}
            meta={[
                { name: 'description', property: 'og:description', content: seo.description },
                { property: 'og:title', content: `${seo.title}` },
                { property: 'og:url', content: seo.url },
                { property: 'og:image', content: seo.image },
                { property: 'og:image:type', content: 'image/jpeg' },
                { property: 'twitter:image:src', content: seo.image },
                { property: 'twitter:title', content: `${seo.title}` },
                { property: 'twitter:description', content: seo.description },
        ]} />

        <div className="frontbanne">
            <Carousel style={{height: "90vh", width: "100%"}} controls={true}>
                        <Carousel.Item>
                            <img
                            className="bob"
                            src="https://images.unsplash.com/photo-1568781269551-3e3baf5ec909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="frontWords2">
                                    <h1 className="titulo">Websites</h1>
                                    <h4 className="paragraph">Soluções para a web 3.0</h4>
                                    <br></br>
                                    <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob"
                            src="https://images.unsplash.com/flagged/photo-1567400358593-9e6382752ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                                <div className="frontWords2">
                                    <h1 className="titulo">Aplicativos</h1>
                                    <h4 className="paragraph">Soluções para a web 3.0</h4>
                                    <br></br>
                                    <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob"
                            src="https://images.unsplash.com/photo-1592492159418-39f319320569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className="frontWords2">
                                    <h1 className="titulo">Sistemas e soluções</h1>
                                    <h4 className="paragraph">Soluções para a web 3.0</h4>
                                    <br></br>
                                    <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>

                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>           
        </div>           
        <div className="frontbanner">
            <Container>
            <Row style={{marginBottom: '80px', marginTop: '100px', alignItems: 'center'}} className="">
                <Col>
                    <img className="pics cen" style={{Width: "40%", height: "40%"}} src="img/moebius.png" alt="lâmpada" />
                </Col>
                <Col>
                    <div className="">
                        <h1 className="titulo5">Precisa de um software específico?</h1>
                        <h4 className="paragraph">Nós somos os caras para o trabalho</h4>
                        <br></br>
                        <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>

        <div className="about" id="#about">
            <Container>
                <Row style={{marginBottom: '80px'}} className="">
                    <Col md='auto'>
                        <img className="pics cen" style={{alignItems: 'center'}} src="img/astronaut.png" alt="lâmpada" />
                    </Col>
                    <Col>
                        <h2 className="titulo1" style={{marginTop: '130px', marginBottom: '20px'}}>A Horizon Labs</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>Somos um laboratório de ideias tecnológicas que desenvolve softwares e estratégias digitais. Nossas soluções são programadas com nossa tecnologia própria e por isso possuem melhor adaptabilidade e desempenho.</p>
                        <br></br>
                        <a href="/about"><button style={{margin: '12px'}}>Saber mais sobre a Horizon</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="frontbanne2" style={{maxHeight: "100%", width: "100%"}}>
        <Carousel style={{width: "100%", maxHeight: "100%"}}>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="First slide"
                            />
                            <Carousel.Caption className="frontWords">
                                <h1 className="titulo">Horizon labs</h1>
                                <h4 className="paragraph">Soluções para a web 3.0</h4>
                                <br></br>
                                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Second slide"
                            />
                            <Carousel.Caption className="frontWords">
                                <h1 className="titulo">Horizon labs</h1>
                                <h4 className="paragraph">Soluções para a web 3.0</h4>
                                <br></br>
                                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Third slide"
                            />
                            <Carousel.Caption className="frontWords">
                                <h1 className="titulo">Horizon labs</h1>
                                <h4 className="paragraph">Soluções para a web 3.0</h4>
                                <br></br>
                                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>           
        </div>           

        <div className="pitch" id="#pitch">
            <Container style={{alignItems: 'center', textAlign: ''}}>
                <Row style={{marginTop: '40px', marginBottom: '40px'}} className="mar">
                    <Col sm>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Na Horizon Labs nós criamos o futuro da web 3.0</h4>
                    <br></br>
                    <p className="paragraph3">Aplicativos, sistemas e websites modernos precisam ser pensados desde o início para a web 3.0 em 2022, é isso que nós fazemos, criamos coisas do zero totalmente pensadas para a internet em 2022.</p>
                    <p className="paragraph3">Na Horizon Labs não ficamos presos ao passado e conseguimos criar e programar - quase - tudo que for necessário para o sucesso do seu negócio.</p>
                    <p className="paragraph3"></p>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Saiba mais sobre nossos projetos da web 3.0</h4>
                    <br></br>
                    <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale2">Conversar com os programadores</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="services" id="#services">
            <Container style={{marginTop: '70px', marginBottom: '70px'}}>
                <h2 className="titulo3" style={{marginBottom: '30px'}}>Como a tecnologia da Horizon pode ajudar o seu negócio?</h2>
                <br></br>
                <Row style={{alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🖥️</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Criação de websites e sistemas específicos para a web 3.0.</p>
                    </Col>
                        
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🌎</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Desenvolvimento de soluções modernas que atendam suas necessidades.</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🚀</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Otimização de softwares e sistemas para funcionarem de acordo com a a web em 2022.</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>💸</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Melhorar a lucratividade do seu negócio através da nossa tecnologia.</p>
                    </Col>
                </Row>
                <br></br>
                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale2">Quero saber mais</button></a>
            </Container>
        </div>

        <div className="packages" id="#packages">
            <Container style={{marginBottom: '90px'}}>
                <Row style={{marginTop: '90px', marginBottom: '40px'}} className="mar">
                    <Col sm>
                        <h2 className="titulo3" style={{}}>Websites por assinatura</h2>
                        <br></br>
                        <br></br>
                        <p className="paragraph3" style={{textAlign: 'left', margin: '12px'}}>É isso mesmo, você não precisa mais desembolsar R$2000,00 ou mais para comprar o seu site, você pode escolher o que quer, colocar no seu pacote da Horizon e pagar um aluguel mensal do seu site com tudo incluso. Genial não é mesmo?</p>
                        <br></br>
                    </Col>
                </Row>
                <br></br>

                <h4 className="titulo3" style={{marginBottom: '40px'}}>Assine o seu website agora mesmo.</h4>
                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale2" style={{margin: '12px'}}>Conversar com a equipe</button></a>
            </Container>
        </div>

        <div className="social">
            <Container style={{marginTop: '70px', marginBottom: '70px'}} >
                <Row className="mar">
                <Col>
                <h1 className="titulo2" align="justify">Você quer que sua empresa te traga mais clientes de forma automática?</h1>
                <br></br>
                <p className="paragraph5">Contrate os serviços de tráfego pago para atrair mais clientes pelo Facebook ads para o seu negócio. Com apenas R$10 por dia você já consegue começar a atrair novos clientes.</p>
                <br></br>
                <a href=""><button className="buttonSale2">Entrar em contato agora</button></a>
                </Col>
                </Row>
            </Container>
        </div>

        <div className="products">
            <Container style={{marginBottom: '90px'}}>
                <Row className="mar">
                    <Col md='auto' style={{marginTop: '50px'}}>
                        <img className="pics" src='img/horizon.png' style={{width: '280px', height: '280px'}} />
                    </Col>

                    <Col sm style={{marginTop: '90px', marginRight: '80px', alignItems: 'left', justifyContent: 'left'}}>
                        <h2 className="titulo3" style={{}}>Marketing digital</h2>
                        <br></br>
                        <p className="paragraph3">Nós também fornecemos serviços de markertin digital, gestão de tráfego pago, criação de mídias digitais para redes sociais e edição de vídeos personalizadas.</p>
                        <br></br>
                        <a href="/planos" style={{margin: '12px'}}><button className="">Ver todos os serviços</button></a>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Home
