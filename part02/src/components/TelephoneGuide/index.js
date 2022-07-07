import React, { useState } from "react";
import Person from "../Person";



const TelephoneGuide = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (persons.some(item => item.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons([...persons, {name: newName, number: newNumber}])
      setNewName('')
      setNewNumber('')
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
      filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)} />
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => {
          return(
            <li key={person.name}>
              <Person name={person.name} number={person.number}/>
            </li>
          )
          })}
      </ul>
    </div>
  )
}

export default TelephoneGuide