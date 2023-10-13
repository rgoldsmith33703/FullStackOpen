import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{
    name: '',
    number: ''
  }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

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

function numbersList(search) {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
  const listItems = filteredPersons.map(person => (
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  ));
  return listItems;
}

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with
        <input 
          value={search}
          onChange={e =>
            (setSearch(e.target.value))}
        />
      </p>
      <form>
        <h2>add a new</h2>
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
        {numbersList(search)}  
    </div>
  )
}

export default App