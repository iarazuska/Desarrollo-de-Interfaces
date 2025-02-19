// src/components/NewsList.jsx
import React, { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsList = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('/noticias.json')
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error('Error al cargar las noticias:', error))
  }, [])

  return (
    <div>
      <h1 className="mb-4">Listado de Noticias</h1>
      <ListGroup>
        {news.map((item, index) => (
          <ListGroup.Item key={index}>
            <Link to={`/news/${index}`}>{item.titulo}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default NewsList
