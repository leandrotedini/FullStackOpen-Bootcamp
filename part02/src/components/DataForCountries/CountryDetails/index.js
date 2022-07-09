import React from "react";
import WeatherDetails from "../WeatherDetails";

const CountryDetails = ({ country }) => {

  return(
    <div>
      <h1>{country.name}</h1>

      <span>capital: {country.capital}</span>
      <br/>
      <span>population: {country.population}</span>

      <h2>languages</h2>
      <ul>
        {country.languages.map( language => <li key={language}> {language} </li>)}
      </ul>

      <img src={country.flag} alt='Country Flag'/>

      <WeatherDetails countryName={country.name} />

    </div>
  )
}

export default CountryDetails