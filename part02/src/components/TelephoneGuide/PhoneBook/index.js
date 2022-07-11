import React, { useState, useEffect } from "react";
import telephoneGuideServices from "../../services/telephoneGuideServices";
import Filter from "../Filter";
import PersonForm from "../PersonForm";
import Persons from "../Persons";
import Notification from "../Notification";



const PhoneBook = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState({message:null, succes:null})

  useEffect(() => {
    telephoneGuideServices.getAll()
      .then(returnedPersons => setPersons(returnedPersons))
  }, [])

  const showNotification = (message, succes) => {
    setNotificationMessage({message:message, succes:succes})
    setTimeout(() => {
      setNotificationMessage({message:null, succes:null})
    }, 5000)
  }

  const addName = (event, newName, newNumber) => {
    event.preventDefault()

    const repeatedElement = persons.find( person => person.name === newName)

    if (typeof(repeatedElement) !== 'undefined'){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        telephoneGuideServices.update(repeatedElement.id, {name: newName, number: newNumber})
          .then( personUpdated => {
            const personsUpdated = persons.filter(person => person.id !== repeatedElement.id)
            setPersons([...personsUpdated, personUpdated])
            showNotification(`${newName} was edited`, true)
          })
          .catch(
            showNotification(`Information of ${newName} has already been removed from server`, false)
          )
        return true
      }    
      return false
    }else{
      telephoneGuideServices.create({name: newName, number: newNumber})
        .then(returnedPerson => {
          setPersons([...persons,returnedPerson])
          showNotification(`Added ${newName}`, true)
        })
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
      <Notification message={notificationMessage.message} succes={notificationMessage.succes}/>
      <Filter filter={filter} handler={(event) => setFilter(event.target.value)}/>
      <PersonForm submitHandler={addName} />
      <Persons persons={personsToShow} updatePersons={setPersons}/>
    </div>
  )
}

export default PhoneBook