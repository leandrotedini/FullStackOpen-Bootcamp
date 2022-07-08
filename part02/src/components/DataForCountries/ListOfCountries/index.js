import React from "react";

const ListOfCountries = ({ countries, handlerButton }) => {
  return(
    <ul>
      {countries.map( country => {
        return(
          <>
            <li key={country.name}>{country.name}</li>
            <button onClick={() => handlerButton(country.name)}>show</button>
          </>
        )}
      )}
    </ul>
  )
}

export default ListOfCountries