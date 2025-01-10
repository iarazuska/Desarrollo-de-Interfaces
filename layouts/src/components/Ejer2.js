import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ejer2() {
    return (
        <Container fluid className="mt-5">
            <Row>
                <Col md={6} className="text-center">
                    <img
                        src="/plantas interior.jpg"
                        className="img-fluid"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <h2 className="mt-3">Plantas de interior</h2>
                    <p>
                        Las mejores plantas de interior de fácil cuidado y perfectas para el hogar.
                    </p>
                </Col>


                <Col md={6}>
                    <Row className="text-center mb-4">
                        <Col md={12} className="d-flex align-items-center justify-content-center">
                            <img
                                src="/foto1.jpg"
                                alt="Pothos o Epipremnum aureum"
                                className="img-fluid mb-2"
                                style={{ width: "150px", height: "150px" }}
                            />
                            <p className="ml-3">Pothos o Epipremnum aureum</p>
                        </Col>
                    </Row>
                    <Row className="text-center mb-4">
                        <Col md={12} className="d-flex align-items-center justify-content-center">
                            <img
                                src="/foto2.jpg"
                                alt="Spathiphyllum o Lirio de la Paz"
                                className="img-fluid mb-2"
                                style={{ width: "150px", height: "150px" }}
                            />
                            <p className="ml-3">Spathiphyllum o Lirio de la Paz</p>
                        </Col>
                    </Row>
                    <Row className="text-center mb-4">
                        <Col md={12} className="d-flex align-items-center justify-content-center">
                            <img
                                src="/foto3.jpg"
                                alt="Sansevieria o Lengua de tigre"
                                className="img-fluid mb-2"
                                style={{ width: "150px", height: "150px" }}
                            />
                            <p className="ml-3">Sansevieria o Lengua de tigre</p>
                        </Col>
                    </Row>
                    <Row className="text-center mb-4">
                        <Col md={12} className="d-flex align-items-center justify-content-center">
                            <img
                                src="/foto4.jpg"
                                alt="Anturio rojo o Anthurium"
                                className="img-fluid mb-2"
                                style={{ width: "150px", height: "150px" }}
                            />
                            <p className="ml-3">Anturio rojo o Anthurium</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Ejer2;
