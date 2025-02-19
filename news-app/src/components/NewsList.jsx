// Importamos React, useState y useEffect para manejar el estado y efectos secundarios en el componente.
import React, { useState, useEffect } from 'react'
// Importamos 'ListGroup' de React Bootstrap para crear una lista de noticias.
import { ListGroup } from 'react-bootstrap'
// Importamos 'Link' desde 'react-router-dom' para crear enlaces de navegación entre páginas.
import { Link } from 'react-router-dom'

// Creamos el componente NewsList que mostrará un listado de noticias.
const NewsList = () => {
  // Inicializamos el estado 'news' como un array vacío para guardar las noticias.
  const [news, setNews] = useState([])

  // Usamos 'useEffect' para cargar las noticias cuando el componente se monta.
  useEffect(() => {
    // Hacemos una solicitud para obtener las noticias desde un archivo JSON.
    fetch('/noticias.json')
      .then((response) => response.json()) // Convertimos la respuesta en formato JSON.
      .then((data) => setNews(data)) // Guardamos las noticias en el estado.
      .catch((error) => console.error('Error al cargar las noticias:', error)) // Si hay un error, lo mostramos en la consola.
  }, []) // El efecto solo se ejecuta una vez, cuando el componente se monta.

  return (
    <div>
      {/* Título de la página con un margen inferior de 4 */}
      <h1 className="mb-4">Listado de Noticias</h1>
      {/* 'ListGroup' de Bootstrap para mostrar una lista de noticias. */}
      <ListGroup>
        {/* Usamos 'map' para recorrer todas las noticias y renderizarlas en la lista. */}
        {news.map((item, index) => (
          // Cada noticia se muestra como un 'ListGroup.Item' y se asocia un enlace a la noticia.
          <ListGroup.Item key={index}>
            {/* 'Link' se usa para navegar a la página de detalles de cada noticia, usando el índice como parte de la URL. */}
            <Link to={`/news/${index}`}>{item.titulo}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

// Exportamos el componente para poder usarlo en otras partes de la aplicación.
export default NewsList
