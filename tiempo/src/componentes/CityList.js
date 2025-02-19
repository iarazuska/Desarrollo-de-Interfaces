import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const CityList = () => {
    const { weather, setSelectedCity } = useContext(WeatherContext);

    return (
        <div>
            <h2>Ciudades disponibles</h2>
            {weather.map((city, index) => (
                <button key={index} onClick={() => setSelectedCity(city.nombre)}>
                    {city.nombre}
                </button>
            ))}
        </div>
    );
};

export default CityList;