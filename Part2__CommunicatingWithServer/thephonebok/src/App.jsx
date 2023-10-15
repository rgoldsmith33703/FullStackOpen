import { useState, useEffect } from "react"
import personService from "./services/persons"
import Search from './components/Search'
import Form from './components/Form'
import NumbersList from "./components/NumbersList"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    }, [])

  function addNewName(e) {
    e.preventDefault()
    persons.includes(newName) 
      ? alert(`${newName} is already added to phonebook`)
      : personService
          .create({
            name: newName,
            number: newNumber
          })
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
          })
    setNewName('')
    setNewNumber('')
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleNewName(e) {
    setNewName(e.target.value)
  }

  function handleNewNumber(e) {
    setNewNumber(e.target.value)
  }



  return (
    <div>
      <h1>Phonebook</h1>
      <Search value={search} handleSearch={handleSearch} />
      <Form newName={newName}
            newNumber={newNumber}
            handleNewName={handleNewName}
            handleNewNumber={handleNewNumber}
            addNewName={addNewName}
      />
      <NumbersList persons={persons}
                   search={search}
      /> 
    </div>
  )
}

export default App