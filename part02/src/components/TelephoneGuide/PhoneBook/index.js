import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../Filter";
import PersonForm from "../PersonForm";
import Persons from "../Persons";



const PhoneBook = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

export default PhoneBook