import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [vuelos, setVuelos] = useState([]);
  const [vueloSeleccionado, setVueloSeleccionado] = useState(null); // Para manejar el vuelo seleccionado
  const [anadirVuelo, setAnadirVuelo] = useState(false);
  const [seats, setSeats] = useState(0);
  const [llegada, setLlegada] = useState();

  // Estados para los campos del formulario
  const [nuevoVuelo, setNuevoVuelo] = useState({
    number: '',
    date: '',
    time: '',
    seats: '',
    destination: ''
  });

  useEffect(() => {
    fetch('./vuelos.json')
      .then(response => response.json())
      .then(data => setVuelos(data))
      .catch(error => console.log("No se pudo cargar el json", error));
  }, []);

  // Función para mostrar detalles del vuelo seleccionado
  const seleccionar = (vuelo) => {
    setVueloSeleccionado(vuelo); // Actualizamos el estado con el vuelo seleccionado
  };

  const Reservar = (vuelo) => {
    if (vuelo.seats > 0) {
      setSeats(seats + 1)
      vuelo.seats = vuelo.seats - 1; // Reducir las plazas del vuelo
      if (vuelo.seats < 3) {
        alert(`Últimas plazas disponibles para el vuelo ${vuelo.number} con destino ${llegada}`);
      }
    }
  }

  const Liberar = (vuelo) => {
    if (seats > 0) {
      setSeats(seats - 1)
      vuelo.seats = vuelo.seats + 1; // Aumentar las plazas del vuelo
    }
  }

  // Función para eliminar un vuelo específico de la lista de vuelos
  const Eliminar = (vuelo) => {
    setVuelos((prevVuelos) =>
      prevVuelos.map((destino) => ({
        ...destino,
        flights: destino.flights.filter((v) => v.number !== vuelo.number),
      }))
    );
  };

  const Formulario = () => {
    setAnadirVuelo(true);
  }

  // Función para manejar el envío del formulario y añadir el vuelo a la lista
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    const nuevoDestino = vuelos.find((vuelo) => vuelo.destination === nuevoVuelo.destination);
      // Si el destino ya existe, agregamos el nuevo vuelo al array de vuelos
      setVuelos(prevVuelos => {
        return prevVuelos.map(destino => 
          destino.destination === nuevoVuelo.destination 
          ? { ...destino, flights: [...destino.flights, nuevoVuelo] } 
          : destino
        );
      });

    // Limpiar el formulario y esconderlo
    setNuevoVuelo({
      number: '',
      date: '',
      time: '',
      seats: '',
      destination: ''
    });
    setAnadirVuelo(false);
  };

  return (
    <div className="App">
      <h2>Vuelos</h2>
      <ul>
        {vuelos.map((destino, index) => (
          <li key={index}>
            <h3>{destino.destination}</h3>
            <button onClick={() => {Formulario(); setVueloSeleccionado(null)}}>Añadir Vuelo</button>
            <ul>
              {destino.flights.map((vuelo, vueloIndex) => (
                <li key={vueloIndex}>
                  <div className="card">
                    <h3>{vuelo.number}</h3>
                    <p><strong>Fecha:</strong> {vuelo.date}</p>
                    <p><strong>Hora:</strong> {vuelo.time}</p>
                    <button onClick={() => { seleccionar(vuelo); setSeats(0); setLlegada(destino.destination); setAnadirVuelo(false)}}>Seleccionar</button>
                    <button onClick={() => Eliminar(vuelo)}>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Detalles del vuelo seleccionado */}
      {vueloSeleccionado && (
        <div className="details-card active">
          <h3>Detalles del Vuelo</h3>
          <p><strong>Vuelo:</strong> {vueloSeleccionado.number}</p>
          <p><strong>Fecha:</strong> {vueloSeleccionado.date}</p>
          <p><strong>Hora:</strong> {vueloSeleccionado.time}</p>
          <p><strong>Asientos disponibles:</strong> {vueloSeleccionado.seats}</p>
          <p><strong>Asientos reservados: </strong>{seats} </p>
          <button onClick={() => Reservar(vueloSeleccionado)}>Reservar</button>
          <button onClick={() => Liberar(vueloSeleccionado)}>Liberar</button>
        </div>
      )}

      {/* Formulario para añadir un vuelo nuevo */}
      {anadirVuelo && (
        <form className='signup' onSubmit={handleSubmit}>
          <label htmlFor="opciones">Selecciona una Ciudad:</label>
          <select 
            id="opciones" 
            name="opciones" 
            value={nuevoVuelo.destination} 
            onChange={(e) => setNuevoVuelo({ ...nuevoVuelo, destination: e.target.value })}
          >
            <option value="Sevilla">Sevilla</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
          </select>

          <input
            type="text"
            name="number"
            placeholder="Número de vuelo"
            value={nuevoVuelo.number}
            onChange={(e) => setNuevoVuelo({ ...nuevoVuelo, number: e.target.value })}
          />
          <input
            type="date"
            name="date"
            value={nuevoVuelo.date}
            onChange={(e) => setNuevoVuelo({ ...nuevoVuelo, date: e.target.value })}
          />
          <input
            type="time"
            name="time"
            value={nuevoVuelo.time}
            onChange={(e) => setNuevoVuelo({ ...nuevoVuelo, time: e.target.value })}
          />
          <input
            type="number"
            name="seats"
            placeholder="Plazas"
            value={nuevoVuelo.seats}
            onChange={(e) => setNuevoVuelo({ ...nuevoVuelo, seats: e.target.value })}
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default App;
