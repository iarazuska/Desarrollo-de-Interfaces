import React from 'react';
import Carrito from './components/carrito'; // Asegúrate de que la ruta al componente Carrito es correcta
import './App.css'; // Importa el archivo CSS general de la aplicación

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tienda de Artículos Navideños</h1>
      </header>
      <Carrito />
    </div>
  );
}

export default App;
