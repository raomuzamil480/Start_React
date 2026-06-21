import InfoBox from "./InfoBoc";
import Searchox from "./SearchBox";
import { useState } from "react";

export default function Weather() {
     const [weather, setWeather] = useState({
            city: "Lahore",
               country: "Pakistan",
               temp: 30,
               temp_min: 28,
               temp_max: 32,
               humidity: 60,
               pressure: 1012,
               description: "Clear Sky",
     });

     let updateWeather = (data) => {
          setWeather(data);
     };
  return (
    <div>
      <h1>Weather App</h1>
          {/* <Searchox/> */}
          <Searchox updateWeather={updateWeather}/>
          <InfoBox data={weather}/>
          
    </div>
  );
}