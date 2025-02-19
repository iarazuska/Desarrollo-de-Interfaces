import { createContext, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        fetch("/weather.json")
            .then((response) => response.json())
            .then((data) => {
                setWeather(data.ciudades);
                setSelectedCity(data.ciudades[0] || null);
            })
            .catch((error) => console.error("Error fetching JSON:", error));
    }, []);

    const selectCity = (cityName) => {
        const city = weather.find(c => c.nombre === cityName);
        if (city) setSelectedCity(city);
    };

    return (
        <WeatherContext.Provider value={{ weather, selectedCity, setSelectedCity: selectCity }}>
            {children}
        </WeatherContext.Provider>
    );
};