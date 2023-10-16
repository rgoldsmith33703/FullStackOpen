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
    }, [persons])


  function createNewPerson() {
    personService
      .create({
        name: newName,
        number: newNumber
      })
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
  }

  function updatePerson(personToUpdate) {
    const updatedPerson = { ...personToUpdate, number: newNumber}

    personService
      .update(personToUpdate.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson))
      })
      .catch(error => {
        console.log(error)
        setPersons(persons.filter(person => person.id !== personToUpdate.id))
      })
  }

  function addNewName(e) {
    e.preventDefault()
    if (persons.some(person => person.name === newName)) {
      if (persons.some(person => person.number === newNumber)) {
        alert(`${newName} is already added to phonebook`)
      } else if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personToUpdate = persons.filter(person => person.name === newName)[0]
        updatePerson(personToUpdate)
      }
    } else {
      createNewPerson()
    }
    setNewName('')
    setNewNumber('')
  }

  function deletePerson(e) {
    const personToDelete = persons.filter(person => person.id === Number(e.target.value))[0]
    if (window.confirm(`Would you like to delete ${personToDelete.name}?`)) {
      personService.remove(e.target.value)
    }
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
                   deletePerson={deletePerson}
      /> 
    </div>
  )
}

export default App