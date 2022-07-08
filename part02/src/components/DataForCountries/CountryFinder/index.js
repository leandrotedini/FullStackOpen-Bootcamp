import React, {useEffect, useState} from "react";
import axios from "axios";
import ListOfCountries from "../ListOfCountries";
import CountryDetails from "../CountryDetails";

const CountryFinder = () => {
  const [countryToFind, setCountryToFind] = useState('')
  const [countries, setCountries] = useState([])

  useEffect( () => {
    if (countryToFind !== '') {
     axios
      .get(`https://restcountries.com/v3.1/name/${countryToFind}`)
      .then( response => {
        const countryResults = response.data.map(country => {
          return(
            {
              name: country.name.common,
              capital: country.capital,
              population: country.population,
              languages: Object.values(country.languages),
              flag: country.flags.png
            }
          )  
        })
        
        setCountries(countryResults)
      })}else{
        setCountries([])
      }
    }
  , [countryToFind])

  const showCountryDetails = (countryName) => {
    const country = countries.find( element => element.name === countryName)
    setCountries([country])
  }

  return (
    <>
      <span>find countries</span><input value={countryToFind} onChange={(event) => setCountryToFind(event.target.value)}/>
      
      {countries.length === 1
      ? <CountryDetails country={countries[0]} />
      : <ListOfCountries countries={countries} handlerButton={showCountryDetails} /> 
      }
      
    </>
  )
}

export default CountryFinder