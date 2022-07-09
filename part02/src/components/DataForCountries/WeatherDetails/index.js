import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

const WeatherDetails = ({ countryName }) => {

  const [weatherState, setWeatherState] = useState({})
  const [errorCall, setErroCall] = useState(false)

  useEffect( () =>{
    axios
      .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${countryName}`)
      .then( response => {
        
        const {temperature, weather_icons, wind_dir, wind_speed} = response.data.current
        
        setWeatherState({
          temperature: temperature,
          weatherImage: weather_icons[0],
          wind_dir: wind_dir,
          wind_speed: wind_speed
        })
      })
      .catch(setErroCall(true))
  }, [])



  return(
    <div>
      <h2>Weather in {countryName}</h2>
      { errorCall
      ? <strong> Something bad happened...</strong>
      :<div>
        <span><strong>temperature: </strong>{weatherState.temperature} Celcius</span>
        <br/>
        <img src={weatherState.weatherImage} alt='Weather Icon'/>
        <br/>
        <span><strong>wind: </strong>{weatherState.wind_speed} mph direction {weatherState.wind_dir}</span>
      </div>
      }
      
    </div>
    
  )
}

export default WeatherDetails