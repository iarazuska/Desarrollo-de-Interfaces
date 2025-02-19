// Importamos React y los componentes necesarios de 'react-router-dom' para gestionar la navegación.
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Importamos los componentes que hemos creado para la barra de navegación y las páginas de noticias.
import NavigationBar from './components/NavigationBar'
import NewsList from './components/NewsList'
import NewsDetail from './components/NewsDetail'

// Componente principal de la aplicación.
function App() {
  return (
    // 'Router' es el contenedor principal que permite gestionar las rutas dentro de la aplicación.
    <Router>
      {/* Colocamos la barra de navegación en la parte superior de la página */}
      <NavigationBar />
      {/* 'div' que contiene el contenido principal de la app, aplicamos un margen superior de 4 para darle espacio */}
      <div className="container mt-4">
        {/* 'Routes' es el componente que maneja la ruta activa en la aplicación */}
        <Routes>
          {/* Ruta para la página principal que muestra la lista de noticias */}
          <Route path="/" element={<NewsList />} />
          {/* Ruta para la página de detalles de una noticia, donde ':id' es el parámetro dinámico que representa el id de la noticia */}
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

// Exportamos el componente 'App' para usarlo en otras partes de la aplicación.
export default App
