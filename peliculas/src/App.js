import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculasDestacadas, setPeliculasDestacadas] = useState(null);

  useEffect(() => {
    fetch('/peliculas (1).json')
      .then(response => response.json())
      .then(data => {
        setPeliculas(data);
        if (data.length > 0) {
          setPeliculasDestacadas(data[0]);
        }
      })
      .catch(error => console.error('error en encontrar el json', error));
  }, []);



  //selecionar la pelicula como destacada
  const selecionarPeli = (pelicula) => {
    setPeliculasDestacadas(pelicula);
  };

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        {peliculasDestacadas && (
          <>
            <div className="col-8">
              <img src={peliculasDestacadas.foto} className="img-fluid" alt={peliculasDestacadas.titulo} />
            </div>
            <div className="col-4">
              <h2>{peliculasDestacadas.titulo}</h2>
              <p>Director: {peliculasDestacadas.director}</p>
              <p>Actores: {peliculasDestacadas.actoresPrincipales.join(', ')}</p>
              <p>{peliculasDestacadas.sinopsis}</p>
            </div>
          </>
        )}
      </div>
      <div className="row">
        {peliculas.map((pelicula, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <img src={pelicula.foto} className="card-img-top" alt={pelicula.titulo} />
              <div className="card-body">
                <h5 className="card-title">{pelicula.titulo}</h5>
                <p className="card-text">Director: {pelicula.director}</p>
                <p className="card-text">Actores: {pelicula.actoresPrincipales.join(', ')}</p>
                <button className="btn btn-primary" onClick={() => alert(pelicula.sinopsis)}>Más</button>
                <button className="btn btn-secondary" onClick={() => selecionarPeli(pelicula)}>Seleccionar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
