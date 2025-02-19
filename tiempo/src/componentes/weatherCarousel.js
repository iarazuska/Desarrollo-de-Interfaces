import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherCarousel = () => {
    const { selectedCity } = useContext(WeatherContext);

    if (!selectedCity) return <p>No hay datos de clima disponibles</p>;

    return (
        <Carousel>
            {selectedCity.fechas.map((dia, index) => (
                <Carousel.Item key={index}>
                    <div className="card">
                        <div className="card-body">
                            <h3>{selectedCity.nombre}</h3>
                            <p>{dia.fecha}</p>
                            <p>Temp: {dia.temperatura.maxima}°C - {dia.temperatura.minima}°C</p>
                            <p>Viento: {dia.viento.velocidad} km/h ({dia.viento.direccion})</p>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default WeatherCarousel;