import React from "react";
import Person from "../Person";
import telephoneGuideServices from "../../services/telephoneGuideServices";

const Persons = ({ persons, updatePersons }) => {

  const deletePerson = (personId, personName) => {
    if (window.confirm(`Delete ${personName}?`)){
    telephoneGuideServices.deletePerson(personId)
      .then(
        updatePersons(persons.filter( person => person.id !== personId ))
      )
    }
  }

  return(
    <>
      <h2>Numbers</h2>
        <ul>
          {persons.map(person => {
            return(
              <li key={person.id}>
                <Person name={person.name} number={person.number}/>
                <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
              </li>
            )
            })}
        </ul>
    </>
  )
}

export default Persons