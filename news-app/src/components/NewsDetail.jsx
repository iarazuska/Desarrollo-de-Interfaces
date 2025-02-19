// src/components/NewsDetail.jsx
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [newsItem, setNewsItem] = useState(null)

  useEffect(() => {
    fetch('/noticias.json')
      .then((response) => response.json())
      .then((data) => {
        // Usamos el índice del array como identificador
        const item = data[parseInt(id, 10)]
        setNewsItem(item)
      })
      .catch((error) => console.error('Error al cargar la noticia:', error))
  }, [id])

  if (!newsItem) return <p>Cargando...</p>

  return (
    <Card>
      <Card.Body>
        <Card.Title>{newsItem.titulo}</Card.Title>
        <Card.Text>{newsItem.contenido}</Card.Text>
        <Card.Text>
          <strong>Categoría:</strong> {newsItem.categoria}
        </Card.Text>
        <Card.Text>
          <strong>Autor:</strong> {newsItem.autor}
        </Card.Text>
        <Card.Text>
          <strong>Fecha:</strong> {newsItem.fecha}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(-1)}>
          Volver al listado
        </Button>
      </Card.Body>
    </Card>
  )
}

export default NewsDetail
