import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Patna",
        feelsLike: 27.51,
        humidity: 32,
        temp: 28.41,
        tempMin: 28.41,
        tempMax: 28.41,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info ={weatherInfo} />
        </div>
    );
}