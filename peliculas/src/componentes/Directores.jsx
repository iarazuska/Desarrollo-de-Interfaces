import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Directores() {
  const [directores, setDirectores] = useState([]);

  useEffect(() => {
    fetch("/peliculas.json")
      .then((response) => response.json())
      .then((data) => {
        // Agrupar películas por director
        const directoresMap = {};
        data.forEach((pelicula) => {
          if (!directoresMap[pelicula.director]) {
            directoresMap[pelicula.director] = [];
          }
          directoresMap[pelicula.director].push(pelicula);
        });

        // Convertir el objeto en un array
        setDirectores(Object.entries(directoresMap));
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Películas por Director</h2>
      <Row>
        {directores.length > 0 ? (
          directores.map(([nombreDirector, peliculas], index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{nombreDirector}</Card.Title>
                  <ul>
                    {peliculas.map((pelicula, idx) => (
                      <li key={idx}>{pelicula.titulo}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No hay directores disponibles.</p>
        )}
      </Row>
    </Container>
  );
}

export default Directores;