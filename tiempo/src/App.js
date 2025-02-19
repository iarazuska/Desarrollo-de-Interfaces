import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WeatherProvider } from "./componentes/WeatherContext";
import Navbar from "./componentes/Navbar";
import CityDetail from "./componentes/CityDetail";
import Home from "./componentes/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <WeatherProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ciudad/:nombre" element={<CityDetail />} />
                </Routes>
            </Router>
        </WeatherProvider>
    );
};

export default App;