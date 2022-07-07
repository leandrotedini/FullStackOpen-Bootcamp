import React, {useState} from "react";

const PersonForm = ({ submitHandler }) => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const buttonHandler = (event) => {

    if (submitHandler(event, newName, newNumber)){
      setNewName('')
      setNewNumber('')
    }
  }
  return(
    <>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={buttonHandler}>add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm