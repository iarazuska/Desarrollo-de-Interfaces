import React,{useEffect} from "react";
import {useState} from "react";
import '../App.css'

const VueloList = () => {
    const [vuelos, setVuelos] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null); 

    useEffect(() => {
        fetch('/vuelos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
                setVuelos(data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                alert('Error al cargar los datos: ' + error.message);
            });
    }, []);
    
    const handleSelectedFlight = (destination, flight) => { 
        setSelectedFlight({ ...flight, destination, reserved: 0 });
    };

    const handleReserveSeat = () => {
        if (selectedFlight && selectedFlight.reserved === selectedFlight.seats - 3) {
            alert(`Últimas plazas para este vuelo ${selectedFlight.number} con destino ${selectedFlight.destination}`);
        }

        if (selectedFlight && selectedFlight.seats > 0) {
            setSelectedFlight(prev => ({
                ...prev,
                reserved: prev.reserved + 1,
            }));
        }
    };

    const handleReleaseSeat = () => {
        if (selectedFlight && selectedFlight.reserved > 0) {
            setSelectedFlight(prev => ({
                ...prev,
                reserved: prev.reserved - 1
            }));
        }
    };

    const handleDeletedFlight = (destination, flightNumber) => {
        setVuelos(prev => prev.map(dest => {
            if (dest.destination === destination) {
                return {
                    ...dest,
                    flights: dest.flights.filter(flight => flight.number !== flightNumber)
                };
            }
            return dest;
        }));
    };

    return (
        <div className="content">
            {vuelos.map(dest => (
                <div className="vuelos" key={dest.destination}>
                    <h2>{dest.destination}</h2>
                    {dest.flights.map(flight => (
                        <div key={flight.number}>
                            <p>{flight.number}-{flight.date}</p>
                            <button onClick={() => handleSelectedFlight(dest.destination, flight)}>Seleccionar</button>
                            <button onClick={() => handleDeletedFlight(dest.destination, flight.number)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            ))}
            {selectedFlight && (
                <div className="menu">
                    <h2>Detalles de vuelo</h2>
                    <p>Destino: {selectedFlight.destination}</p>
                    <p>Fecha: {selectedFlight.date}</p>
                    <p>Hora: {selectedFlight.time}</p>
                    <p>Plazas totales: {selectedFlight.seats}</p>
                    <p>Plazas disponibles: {selectedFlight.seats - selectedFlight.reserved}</p>
                    <p>Plazas ocupadas: {selectedFlight.reserved}</p>

                    <button onClick={handleReserveSeat}
                            disabled={selectedFlight.reserved === selectedFlight.seats}>Reservar
                    </button>

                    <button onClick={handleReleaseSeat} disabled={selectedFlight.reserved === 0}>Liberar</button>
                </div>
            )}
        </div>
    );
};

export default VueloList;