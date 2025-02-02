import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Componentes de cada sección
const Inicio = () => (
  <div className="page">
    <h2>Inicio</h2>
    <p>Bienvenido a la página de inicio.</p>
  </div>
);

const AcercaDeMi = () => (
  <div className="page">
    <h2>Acerca de mí</h2>
    <p>Información sobre mí y mi trabajo.</p>
  </div>
);

const CasosDeExito = () => (
  <div className="page">
    <h2>Casos de Éxito</h2>
    <p>Ejemplos de clientes satisfechos.</p>
  </div>
);

const Contacto = () => (
  <div className="page">
    <h2>Contacto</h2>
    <p>Cómo puedes contactarme.</p>
  </div>
);

const RedesSociales = ({ redid }) => (
  <div className="page">
    <h2>Redes Sociales</h2>
    {redid === "minimal" ? (
      <p className="minimal">Vista Minimalista: Iconos pequeños.</p>
    ) : redid === "detallado" ? (
      <p className="detallado">Vista Detallada: Información completa sobre redes sociales.</p>
    ) : (
      <p className="default">Vista Predeterminada: Lista de redes sociales.</p>
    )}
  </div>
);

// Aplicación principal sin React Router
const App = () => {
  const [seccion, setSeccion] = useState("inicio");

  const renderSeccion = () => {
    switch (seccion) {
      case "acerca":
        return <AcercaDeMi />;
      case "casos":
        return <CasosDeExito />;
      case "contacto":
        return <Contacto />;
      case "redes":
        return <RedesSociales redid="default" />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand onClick={() => setSeccion("inicio")} style={{ cursor: "pointer" }}>
            Mi Web
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setSeccion("inicio")}>Inicio</Nav.Link>
              <Nav.Link onClick={() => setSeccion("acerca")}>Acerca de mí</Nav.Link>
              <Nav.Link onClick={() => setSeccion("casos")}>Casos de éxito</Nav.Link>
              <Nav.Link onClick={() => setSeccion("contacto")}>Contacto</Nav.Link>
              <Nav.Link onClick={() => setSeccion("redes")}>Redes Sociales</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">{renderSeccion()}</Container>
    </div>
  );
};

export default App;
