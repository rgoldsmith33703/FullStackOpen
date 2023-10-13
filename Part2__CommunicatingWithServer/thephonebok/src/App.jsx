import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '555-555-5555'
     }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  function addNewName(e) {
    e.preventDefault()
    persons.includes(newName) 
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(
        {
          name: newName, 
          number: newNumber
        }))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input
                  value={newName} 
                  onChange={e => 
                    (setNewName(e.target.value))}
                />
          <br />
          number: <input
                  value={newNumber} 
                  onChange={e => 
                    (setNewNumber(e.target.value))}
                />
        </div>
        <div>
          <button 
            type="submit"
            onClick={addNewName}>
              add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  )
}

export default App