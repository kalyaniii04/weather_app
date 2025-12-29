import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 25.99,
    humidity: 47,
    temp: 25.99,
    tempMax: 25.99,
    tempMin: 25.99,
    weather: "Smoke",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  }

  return (
    <>
      <h1>Weather App</h1>
      <SearchBox updateInfo={ updateInfo } />
      <InfoBox info={ weatherInfo } />
</>
  );
}
