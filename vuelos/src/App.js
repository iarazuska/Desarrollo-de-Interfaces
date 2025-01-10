import React from 'react';
import VueloList from './components/vuelos.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Vuelos</h1>
      </header>
      <VueloList />
    </div>
  );
}

export default App;

