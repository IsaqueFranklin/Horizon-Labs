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
                                    <h1 className="titulo">Horizon labs</h1>
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
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob"
                            src="https://images.unsplash.com/photo-1592492159418-39f319320569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>           
        </div>           
        <div className="frontbanner">
            <Container>
            <div className="frontWords mar">
                <h1 className="titulo5">Precisa de um software específico?</h1>
                <h4 className="paragraph">Nós somos os caras para o trabalho</h4>
                <br></br>
                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>
            </div>
            </Container>
        </div>

        <div className="about" id="#about">
            <Container>
                <Row style={{marginBottom: '80px'}} className="mar">
                    <Col md='auto'>
                        <img className="pics cen" style={{height: '120px', width: '120px', marginTop: '120px', marginRight: '10px'}} src="img/bulb.png" alt="lâmpada" />
                    </Col>
                    <Col sm>
                        <h2 className="titulo3" style={{marginTop: '100px', marginBottom: '20px'}}>A Horizon Labs</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'justify'}}>Somos um laboratório de ideias tecnológicas que desenvolve softwares e estratégias digitais. Nossas soluções são programadas com nossa tecnologia própria e por isso possuem melhor adaptabilidade e desempenho.</p>
                        <br></br>
                        <a href="/about"><button style={{margin: '12px'}}>Saber mais sobre a Horizon</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="frontbanne" style={{maxHeight: "100%", width: "100%"}}>
        <Carousel style={{width: "100%", maxHeight: "100%"}}>
                        <Carousel.Item>
                            <img
                            className="bob"
                            src="https://images.unsplash.com/photo-1568781269551-3e3baf5ec909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
                            className="bob"
                            src="https://images.unsplash.com/flagged/photo-1567400358593-9e6382752ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob"
                            src="https://images.unsplash.com/photo-1592492159418-39f319320569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>           
        </div>           

        <div className="pitch" id="#pitch">
            <Container style={{alignItems: 'center'}}>
                <Row style={{marginTop: '40px', marginBottom: '40px'}} className="mar">
                    <Col sm>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Está cansado dos websites sem graça que não te trazem mais clientes?</h4>
                    <br></br>
                    <p className="paragraph3">Esses tipos de site não te trazem mais clientes porque são antigos, desatualizados e estáticos, não se adaptaram ao ano de 2022.</p>
                    <p className="paragraph3">Os sites que conseguem trazer mais clientes e mais vendas para você são os sites dinâmicos, com apenas a informação que o leitor precisa para tomar a decisão rápida de contratar você, as landing pages bem estruturadas.</p>
                    <p className="paragraph3"></p>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="center">Quer um site para vender mais?</h4>
                    <br></br>
                    <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale2">Conversar com os programadores</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="services" id="#services">
            <Container style={{marginTop: '70px', marginBottom: '70px'}}>
                <h2 className="titulo3" style={{marginBottom: '30px'}}>Como a Horizon pode te ajudar a lucrar mais?</h2>
                <br></br>
                <Row style={{alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🖥️</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Criamos seu site com tecnologia própria e não por meio de outras plataformas do mercado, por isso temos menos problemas técnicos.</p>
                    </Col>
                        
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🌎</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Trabalhamos o SEO do seu site para que ele possa ficar bem localizado em todos os rankins de pesquisa e ser descoberto por mais potenciais clientes.</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>🚀</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Cuidar da manuntenção do seu website para que ele seja seguro e não haja nenhum problema. Lidar com modificações de desgin semanais que você pode fazer.</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <h1 className="pics" style={{fontSize: '90px', marginBottom: '30px', marginTop: '0px'}}>💸</h1>
                        <p style={{marginLeft: '50px'}} className="paragraph4">Aumentar seu lucro, conhecimento da marca, fama e organizar a estratégia digital da empresa. Tudo isso por uma taxa mensal menor que meio salário minímo. 😁</p>
                    </Col>
                </Row>
                <br></br>
                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale">Eu quero vender mais</button></a>
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
