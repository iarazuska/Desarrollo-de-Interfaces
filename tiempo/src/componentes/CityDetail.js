import { useParams } from "react-router-dom";
import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const CityDetail = () => {
    const { nombre } = useParams();
    const { weather } = useContext(WeatherContext);
    const city = weather.find((c) => c.nombre === nombre);

    if (!city) return <h2>Ciudad no encontrada</h2>;

    return (
        <div>
            <h2>{city.nombre}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Temp Máx</th>
                        <th>Temp Mín</th>
                        <th>Viento</th>
                        <th>Dirección</th>
                        <th>Lluvia</th>
                        <th>Salida Sol</th>
                        <th>Puesta Sol</th>
                    </tr>
                </thead>
                <tbody>
                    {city.fechas.map((dia, index) => (
                        <tr key={index}>
                            <td>{dia.fecha}</td>
                            <td>{dia.temperatura.maxima}°C</td>
                            <td>{dia.temperatura.minima}°C</td>
                            <td>{dia.viento.velocidad} km/h</td>
                            <td>{dia.viento.direccion}</td>
                            <td>{dia.lluvia} mm</td>
                            <td>{dia.sol.salida}</td>
                            <td>{dia.sol.puesta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CityDetail;