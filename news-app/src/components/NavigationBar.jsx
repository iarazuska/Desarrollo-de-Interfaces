// src/components/NavigationBar.jsx
import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Noticias App
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
