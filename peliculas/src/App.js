import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar.jsx';
import Pelis from './componentes/Pelis.jsx';
import MovieModal from './componentes/Modal.jsx';
import Categoria from './componentes/Categoria.jsx';
import Directores from './componentes/Directores.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Pelis />} />
        <Route path="/modal" element={<MovieModal />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path='/directores' element={<Directores />} />
      </Routes>
    </Router>
  );
}

export default App;