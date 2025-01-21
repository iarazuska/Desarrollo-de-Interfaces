import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, NavDropdown, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    fetch('/peliculas (1).json')  
      .then(response => response.json())
      .then(data => {
        setPeliculas(data);
        //hacemos que las categorias sean unicas 
        const allCategorias = data.flatMap(pelicula => 
          typeof pelicula.categoria === 'string' ? pelicula.categoria.split(/,|\//) : pelicula.categoria
        );
        const categoriasUnicas = Array.from(new Set(allCategorias.map(cat => cat.trim()))); 
        setCategorias(categoriasUnicas);

        //sacamos los directores y que sean unicos 
        const directoresUnicos = Array.from(new Set(data.map(pelicula => pelicula.director)));
        setDirectores(directoresUnicos);
        
        //de primeras sacamos todas las pelis
        setFiltro(data);  
      })
      .catch(error => console.log('Error al cargar el JSON:', error));
  }, []);

  const handleCategoria = (categoria) => {
    const filtradas = peliculas.filter(pelicula => 
      typeof pelicula.categoria === 'string' ? pelicula.categoria.includes(categoria) : pelicula.categoria.includes(categoria)
    );
    setFiltro(filtradas);
  };

  const handleDirector = (director) => {
    const filtradas = peliculas.filter(pelicula => pelicula.director === director);
    setFiltro(filtradas);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo192.png" width="30" height="30" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                {categorias.map((categoria, index) => (
                  <NavDropdown.Item key={index} onClick={() => handleCategoria(categoria)}>
                    {categoria}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Directores" id="navbarScrollingDropdown">
                {directores.map((director, index) => (
                  <NavDropdown.Item key={index} onClick={() => handleDirector(director)}>
                    {director}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {filtro.map((pelicula, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={pelicula.foto} />
                <Card.Body>
                  <Card.Title>{pelicula.titulo}</Card.Title>
                  <Card.Text>{pelicula.sinopsis}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
