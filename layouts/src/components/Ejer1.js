import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Ejer1() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={4} style={{
                    backgroundImage: "url('/mujer.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    minHeight: '100vh',  // Asegúrate de que cada columna tenga una altura mínima adecuada
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h1 style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)' }}>Mujer</h1>
                </Col>
                <Col xs={12} md={4} style={{
                    backgroundImage: "url('/hombre.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h1 style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)' }}>Hombre</h1>
                </Col>
                <Col xs={12} md={4} style={{
                    backgroundImage: "url('/niño.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h1 style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)' }}>Niños</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Ejer1;
