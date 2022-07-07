import React, { useState } from "react";
import Filter from "../Filter";
import PersonForm from "../PersonForm";
import Persons from "../Persons";



const TelephoneGuide = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [filter, setFilter] = useState('')

  const addName = (event, newName, newNumber) => {
    event.preventDefault()

    if (persons.some(item => item.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return false
    }else{
      setPersons([...persons, {name: newName, number: newNumber}])
      return true
    }
  }

  const filterPersons = (filter) =>{
    return persons.filter( item => {
      return (
        item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
      )
    })
  }

  const personsToShow = filter === '' ? persons : filterPersons(filter)


  return (
    <div>
      
      <h2>Phonebook</h2>
      <Filter filter={filter} handler={(event) => setFilter(event.target.value)}/>
      <PersonForm submitHandler={addName} />
      <Persons persons={personsToShow} />
    </div>
  )
}

export default TelephoneGuide