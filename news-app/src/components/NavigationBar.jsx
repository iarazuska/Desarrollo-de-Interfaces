// Importamos React para poder escribir código JSX.
import React from 'react'
// Importamos los componentes de Bootstrap para la barra de navegación.
import { Navbar, Container } from 'react-bootstrap'
// Importamos 'Link' de 'react-router-dom' para poder crear enlaces dentro de nuestra app.
import { Link } from 'react-router-dom'

// Creamos un componente llamado NavigationBar.
const NavigationBar = () => {
  return (
    // Usamos el componente 'Navbar' de Bootstrap para crear la barra de navegación.
    <Navbar bg="dark" variant="dark">
      {/* 'Container' asegura que el contenido dentro de la barra esté bien alineado. */}
      <Container>
        {/* 'Navbar.Brand' se usa para mostrar el nombre o logo de la app. */}
        <Navbar.Brand as={Link} to="/">
          {/* Aquí ponemos el nombre de la app que será visible en la barra. */}
          Noticias App
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

// Exportamos el componente para poder usarlo en otras partes de la app.
export default NavigationBar
