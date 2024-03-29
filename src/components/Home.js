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

<div className="about">
            <Container>
                <Row style={{marginBottom: '50px', marginTop: '50px', alignItems: 'center'}} className="">
                    <Col>
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/tron5.png" alt="lâmpada" />
                    </Col>
                    <Col sm>
                        <h2 className="titulo" style={{}}>Horizon Labs</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>A Horizon Labs é uma empresa especializada em desenvolver websites, sistemas e aplicativos de alta tecnologia e baixo custo para pequenos empreendedores e negócios locais.</p>
                        <br></br>
                        <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale2" style={{margin: '12px'}}>Saber mais</button></a>
                    </Col>
                </Row>
            </Container>      
        </div>

        <div className="about" id="#about">
            <Container>
                <hr style={{color: '#f1f1f1', height: '5px'}}></hr>
                <Row style={{marginBottom: '50px', marginTop: '50px', alignItems: 'center'}} className="mar">
                    <Col>
                        <img className="pics pointo2" style={{alignItems: 'center'}} src="img/logo2.png" alt="lâmpada" />
                    </Col>
                    <Col sm>
                        <h2 className="titulo1" style={{}}>A Horizon Labs</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>Somos uma empresa de desenvolvimento de websites, sistemas e aplicativos para outras empresas que precisam colocar seus negócios na internet. Nós garantimos o aumento do seu faturamento com nossos sites modernos.</p>
                        <br></br>
                        <a href="/about"><button className="buttonSale2" style={{margin: '12px'}}>Preciso de um site</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="pitch" id="#pitch">
            <Container style={{alignItems: 'center', textAlign: ''}}>
                <Row style={{marginTop: '120px', marginBottom: '100px'}} className="mar">
                    <Col sm>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Nós ajudamos a escalar negócios e empresas com nossa tecnologia e software.💡✨</h4>
                    <br></br>
                    <p className="paragraph3">A Horizon Labs desenvolve sistemas, aplicativos e automações para a internet, criamos coisas do zero totalmente pensadas para a internet do futuro.</p>
                    <p className="paragraph3">Construimos softwares online e aplicativos para empresas e negócios, conseguimos melhorar sua produtividade e lucratividade com nossa tecnologia.</p>
                    <p className="paragraph3"></p>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Saiba mais sobre nossos sistemas</h4>
                    <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale2" style={{marginTop: '60px'}}>Conversar com os programadores</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="frontbanne">
        <Carousel style={{height: "90vh", width: "100%"}}>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo">Websites</h1>
                                <h4 align="center" className="paragraph">Soluções para a web 3.0</h4>
                                <br></br>
                                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo">Aplicativos</h1>
                                <h4 align="center" className="paragraph">Soluções para a web 3.0</h4>
                                <br></br>
                                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo">Sistemas e soluções</h1>
                                <h4 align="center" className="paragraph">Soluções para a web 3.0</h4>
                                <br></br>
                                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button className="buttonSale3">Fale com os programadores</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>           
        </div>           

        <div className="pitch" id="#pitch">
            <Container style={{alignItems: 'center', textAlign: ''}}>
                <Row style={{marginTop: '100px', marginBottom: '100px'}} className="mar">
                    <Col sm>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Na Horizon Labs nós criamos o futuro da web 3.0</h4>
                    <br></br>
                    <p className="paragraph3">Aplicativos, sistemas e websites modernos precisam ser pensados desde o início para a web 3.0 em 2023, é isso que nós fazemos, criamos coisas do zero totalmente pensadas para a internet em 2023.</p>
                    <p className="paragraph3">Na Horizon Labs não ficamos presos ao passado e conseguimos criar e programar - quase - tudo que for necessário para o sucesso do seu negócio.</p>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Saiba mais sobre nossos projetos da web 3.0</h4>
                    <br></br>
                    <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20time%20de%20programadores%20da%20Horizon%20Labs!"><button style={{marginTop: '40px'}} className="buttonSale2">Conversar com os programadores</button></a>
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
                        <h2 className="titulo3" style={{}}>Tecnologia para resolver problemas reais</h2>
                        <br></br>
                        <br></br>
                        <p className="paragraph3" style={{textAlign: 'center', margin: '12px'}}>Não importa o setor em que o seu negócio opera, contamos com especialistas em todas as tecnologias disponíveis para te ajudar. Desde linguagens tradicionais como Java, .NET e Python às novas e emocionantes tendências como NodeJS e React.

Fale o que você precisa e nós atendemos.</p>
                        <br></br>
                    </Col>
                </Row>
                <br></br>
                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale2" style={{margin: '12px'}}>Conversar com a equipe</button></a>
            </Container>
        </div>

        <div className="social">
            <Container style={{marginTop: '70px', marginBottom: '70px'}} >
                <Row className="mar">
                <Col>
                    <img className='pics pointo2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/385px-Google_Ads_logo.svg.png" />
                </Col>
                <Col sm> 
                <div style={{}}>
                    <h1 className="titulo2" align="left">Fature mais com Google Ads</h1>
                    <br></br>
                    <p className="paragraph5">O Google Ads é uma ferramenta de publicidade online que ajuda as empresas a alcançarem um público mais amplo e atraindo mais clientes em potencial. A Horizon Labs é especializada em marketing digital que é excelente em ajudar seus clientes a criar campanhas eficazes no Google Ads, gerando leads de alta qualidade e aumentando as vendas.</p>
                    <br></br>
                    <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale2">Entrar em contato agora</button></a>
                </div>
                </Col>
                </Row>
            </Container>
        </div>

        <div className="products">
            <Container style={{marginBottom: '90px'}}>
                <Row className="mar">
                    <Col md='auto' style={{marginTop: '50px'}}>
                        <img className="pics" src='img/logo2.png' style={{width: '280px', height: '280px'}} />
                    </Col>

                    <Col sm style={{marginTop: '90px', marginRight: '80px', alignItems: 'left', justifyContent: 'left'}}>
                        <h2 className="titulo3" style={{}}>Marketing digital</h2>
                        <br></br>
                        <p className="paragraph3">Nós também fornecemos serviços de markerting digital, gestão de tráfego pago, criação de mídias digitais para redes sociais e edição de vídeos personalizadas.</p>
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
