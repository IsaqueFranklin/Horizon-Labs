import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
    return (
        <div className="frontbanner">
                <div className="frontWords">
                <h1 className="titulo">Horizon labs</h1>
                <h4 className="paragraph">Soluções modernas para sua empresa</h4>
                <br></br>
                <a href="/blog"><button>Blog</button></a>
                <a href="/orçamento"><button>Orçamento</button></a>
                </div>
            </div>
    )
}

export default Home
