import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
    return (
        <>
        <div className="frontbanner">
            <div className="frontWords">
                <h1 className="titulo">Horizon labs</h1>
                <h4 className="paragraph">Soluções modernas para sua empresa</h4>
                <br></br>
                <a href="/blog"><button>Planos</button></a>
                <a href="/orçamento"><button>Contato</button></a>
            </div>
        </div>

        <div className="about">
            <Container>
                <Row style={{marginBottom: '80px'}}>
                    <Col md="auto" style={{alignItems: 'center', justifyContent: 'center'}}>
                        <h1 style={{fontSize: '170px', marginTop: '70px', marginLeft: '60px', marginRight: '30px'}}>🌃</h1>
                    </Col>
                    <Col sm>
                        <h2 className="titulo3" style={{marginTop: '100px', marginBottom: '20px'}}>A Horizon Labs 💡</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'justify'}}>Somos um laboratório de ideias tecnológicas que desenvolve softwares e estratégias digitais. Nossas soluções são programadas com nossa tecnologia própria e por isso possuem melhor adaptabilidade e desempenho. 💡✨</p>
                        <br></br>
                        <a href=""><button style={{margin: '12px'}}>Conversar com a equipe</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="services">
            <Container style={{marginTop: '70px', marginBottom: '70px'}}>
                <h2 className="titulo2" style={{marginBottom: '30px'}}>Como a Horizon pode te ajudar a vender mais</h2>
                <br></br>
                <Row style={{alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                    <Col style={{marginLeft: '30px', marginRight: '30px'}}>
                        <h1 style={{fontSize: '100px'}}>🌃</h1>
                        <p style={{marginLeft: '60px'}} className="paragraph2">Alguma coisa</p>
                    </Col>
                        
                    <Col style={{marginLeft: '30px', marginRight: '30px'}}>
                        <h1 style={{fontSize: '100px'}}>💡</h1>
                        <p style={{marginLeft: '60px'}} className="paragraph2">Outra coisa</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px'}}>
                        <h1 style={{fontSize: '100px'}}>✨</h1>
                        <p style={{marginLeft: '60px'}} className="paragraph2">Última coisa</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px'}}>
                        <h1 style={{fontSize: '100px'}}>✨</h1>
                        <p style={{marginLeft: '60px'}} className="paragraph2">Última coisa</p>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="packages">
            <Container>
                
            </Container>
        </div>
        </>
    )
}

export default Home
