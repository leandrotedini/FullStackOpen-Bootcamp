import React from "react";

const ListOfCountries = ({ countries, handlerButton }) => {
  return(
    <ul>
      {countries.map( country => {
        return(
          <li key={country.name}>{country.name}<button onClick={() => handlerButton(country.name)}>show</button></li>    
        )}
      )}
    </ul>
  )
}

export default ListOfCountries