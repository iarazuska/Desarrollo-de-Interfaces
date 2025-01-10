import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Ejer1() {

    return (
        <Container>
            <Row>
                <Col xs={12} md={6} lg={4} style={{
                    backgroundImage: "url('/mujer.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height:'100vh'
                }}>
                    <h1>mujer</h1>
                </Col>
                <Col xs={12} md={6} lg={4} style={{
                    backgroundImage: "url('/hombre.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height:'100vh'
                }}>
                    <h1>hombre</h1>
                </Col>
                <Col xs={12} md={6} lg={4} style={{
                    backgroundImage: "url('/niño.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height:'100vh'
                }}>
                    <h1>niños</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Ejer1;