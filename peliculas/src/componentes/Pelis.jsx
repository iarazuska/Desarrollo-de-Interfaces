import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

function Pelis() {
  const [data, setData] = useState([]);
  const [seleccionada, setSeleccionada] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/peliculas.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setSeleccionada(data[0]); // Si no hay seleccionada, mostrar la primera
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="container mt-4">
      {/* Película seleccionada arriba */}
      {seleccionada && (
        <Card className="mb-4">
          <Row className="g-0">
            <Col md={4} className="d-flex flex-column align-items-center p-3">
              <Card.Img
                src={seleccionada.foto}
                alt={seleccionada.titulo}
                className="img-fluid rounded"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>
                  <h2>{seleccionada.titulo} ({seleccionada.año})</h2>
                </Card.Title>
                <Card.Text><strong>Director:</strong> {seleccionada.director}</Card.Text>
                <Card.Text><strong>Actores:</strong> {seleccionada.actoresPrincipales.join(", ")}</Card.Text>
                <Card.Text><strong>Categoría:</strong> {seleccionada.categoria}</Card.Text>
              </Card.Body>
            </Col>
          </Row>

          {/* Sección para las valoraciones que ocupa todo el ancho */}
          <Card.Body>
            <h4>Valoraciones</h4>
            <ListGroup>
              {seleccionada.valoraciones.length > 0 ? (
                seleccionada.valoraciones.map((valoracion, index) => (
                  <ListGroup.Item key={index}>
                    <strong>{valoracion.usuario}:</strong> ⭐ {valoracion.puntuacion}/10 <br />
                    "{valoracion.comentario}"
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>No hay valoraciones disponibles.</ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
        </Card>
      )}

      {/* Lista de películas */}
      <Row>
        {data.map((item, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.foto} alt={item.titulo} />
              <Card.Body>
                <Card.Title><strong>{item.titulo}</strong></Card.Title>
                <Card.Text><strong>Director:</strong> {item.director}</Card.Text>
                <Card.Text><strong>Actores:</strong> {item.actoresPrincipales.join(", ")}</Card.Text>
                <Button
                  onClick={() => navigate("/modal", { state: { item } })}
                  style={{ marginRight: "20px" }}
                >
                  Más
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setSeleccionada(item)}
                >
                  Seleccionar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Pelis;