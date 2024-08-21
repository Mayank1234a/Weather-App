import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Gwalior",
        feelsLikes : 37.56,
        humidity : 69,
        temp : 31.1,
        tempMax : 31.1,
        tempMin : 31.1,
        weather : "overcast clouds"
    }) 

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign : "center"}}>
            <h2>Weather App by Mayank</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}