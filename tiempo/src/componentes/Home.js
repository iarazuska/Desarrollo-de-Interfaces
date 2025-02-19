import WeatherCarousel from "./weatherCarousel";
import CityList from "./CityList";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <WeatherCarousel />
            <CityList />
        </div>
    );
};

export default Home;