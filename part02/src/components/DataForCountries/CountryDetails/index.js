import React from "react";

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

    </div>
  )
}

export default CountryDetails