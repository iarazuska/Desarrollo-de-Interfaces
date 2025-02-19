import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Categoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("/peliculas.json")
      .then((response) => response.json())
      .then((data) => {
        // Obtener categorías únicas y sus películas asociadas
        const categoriasMap = {};
        data.forEach((pelicula) => {
          if (!categoriasMap[pelicula.categoria]) {
            categoriasMap[pelicula.categoria] = [];
          }
          categoriasMap[pelicula.categoria].push(pelicula);
        });

        // Convertir el objeto en un array
        setCategorias(Object.entries(categoriasMap));
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Categorías de Películas</h2>
      <Row>
        {categorias.length > 0 ? (
          categorias.map(([nombreCategoria, peliculas], index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{nombreCategoria}</Card.Title>
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
          <p>No hay categorías disponibles.</p>
        )}
      </Row>
    </Container>
  );
}

export default Categoria;