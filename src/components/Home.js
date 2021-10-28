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
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <h2 className="titulo3" style={{marginTop: '80px', marginBottom: '20px'}}>A Horizon Labs 💡</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '20px'}}>Somos um laboratório de ideias tecnológicas que desenvolve softwares e estratégias digitais. Nossas soluções são programadas com nossa tecnologia própria e por isso possuem melhor adaptabilidade e desempenho. 💡✨</p>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Home
