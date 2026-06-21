import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./search.css";
import { useState } from "react";
function Searchox({ updateWeather, handleError }) {
     const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
     const ApiKey = "0dea5f7f07a32f0d21e4244ba7702461";
     const [error, setError] = useState(null);
     let getWeather = async ( city) => {
           try {
      let response = await fetch(`${ApiUrl}${city}&appid=${ApiKey}`);
      let data = await response.json();
      let result = {
        city: data.name,
        country: data.sys.country,
            temp: data.main.temp,
               temp_min: data.main.temp_min,
               temp_max: data.main.temp_max,
               humidity: data.main.humidity,
               pressure: data.main.pressure,
               description: data.weather[0].description,
      };
      console.log(result);
          return result;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data");
      handleError();
    }
  };

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    
  };
  const handleSubmit = async (e) => {
     try {
    e.preventDefault();
   setSearch("");
    console.log(search);
let info=await getWeather(search);
 updateWeather(info);

  } catch (error) {
    console.error("Error submitting search:", error);
    handleError();
  }
  };
  return (
    <div className="search-box">
      <h3>Search Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          required
          value={search}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Search
        </Button>
      </form>
          {error && <p >No Found</p>}
     
    </div>
    
  );
}
export default Searchox;