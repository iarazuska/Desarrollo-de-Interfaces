import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const { weather } = useContext(WeatherContext);

    return (
        <nav>
            <h1>Weather App</h1>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <span>Ciudades</span>
                    <ul>
                        {weather.map((city, index) => (
                            <li key={index}>
                                <Link to={`/ciudad/${city.nombre}`}>{city.nombre}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;