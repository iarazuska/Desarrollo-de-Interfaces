// Importamos React, useState y useEffect para manejar el estado y los efectos secundarios en el componente.
import React, { useState, useEffect } from 'react'
// Importamos 'useParams' para obtener el parámetro de la URL y 'useNavigate' para navegar a otras páginas.
import { useParams, useNavigate } from 'react-router-dom'
// Importamos componentes de Bootstrap para mostrar la noticia de forma estructurada.
import { Card, Button } from 'react-bootstrap'

// Creamos el componente NewsDetail que mostrará los detalles de una noticia.
const NewsDetail = () => {
  // Usamos 'useParams' para obtener el parámetro 'id' de la URL.
  const { id } = useParams()
  // Usamos 'useNavigate' para permitir la navegación dentro de la app.
  const navigate = useNavigate()
  // Inicializamos un estado para guardar la noticia que se cargará desde el archivo JSON.
  const [newsItem, setNewsItem] = useState(null)

  // Usamos 'useEffect' para cargar la noticia cuando el componente se monta o cuando cambia el 'id' en la URL.
  useEffect(() => {
    // Hacemos una solicitud para obtener las noticias desde un archivo JSON.
    fetch('/noticias.json')
      .then((response) => response.json()) // Convertimos la respuesta en formato JSON.
      .then((data) => {
        // Usamos el 'id' para encontrar la noticia en el array de datos.
        const item = data[parseInt(id, 10)] // Convertimos el id a número.
        setNewsItem(item) // Guardamos la noticia en el estado.
      })
      .catch((error) => console.error('Error al cargar la noticia:', error)) // Si hay un error, lo mostramos en la consola.
  }, [id]) // El efecto se ejecuta cada vez que cambia el 'id' de la URL.

  // Si 'newsItem' no ha cargado aún, mostramos un mensaje de "Cargando...".
  if (!newsItem) return <p>Cargando...</p>

  // Si ya tenemos la noticia, mostramos los detalles.
  return (
    <Card>
      <Card.Body>
        {/* Mostramos el título de la noticia dentro de un 'Card.Title'. */}
        <Card.Title>{newsItem.titulo}</Card.Title>
        {/* Mostramos el contenido de la noticia. */}
        <Card.Text>{newsItem.contenido}</Card.Text>
        {/* Mostramos la categoría de la noticia. */}
        <Card.Text>
          <strong>Categoría:</strong> {newsItem.categoria}
        </Card.Text>
        {/* Mostramos el autor de la noticia. */}
        <Card.Text>
          <strong>Autor:</strong> {newsItem.autor}
        </Card.Text>
        {/* Mostramos la fecha de la noticia. */}
        <Card.Text>
          <strong>Fecha:</strong> {newsItem.fecha}
        </Card.Text>
        {/* Botón para volver al listado de noticias. */}
        <Button variant="primary" onClick={() => navigate(-1)}>
          Volver al listado
        </Button>
      </Card.Body>
    </Card>
  )
}

// Exportamos el componente para poder usarlo en otras partes de la aplicación.
export default NewsDetail
