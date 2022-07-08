import React from "react";
import Person from "../Person";

const Persons = ({ persons }) => {

  return(
    <>
      <h2>Numbers</h2>
        <ul>
          {persons.map(person => {
            return(
              <li key={person.name}>
                <Person name={person.name} number={person.number}/>
              </li>
            )
            })}
        </ul>
    </>
  )
}

export default Persons