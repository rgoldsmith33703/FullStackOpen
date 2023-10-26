import { React, useState, useEffect } from 'react'
import personService from './services/persons'
import Search from './components/Search'
import Form from './components/Form'
import NumbersList from './components/NumbersList'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  function createNewPerson() {
    personService
      .create({
        name: newName,
        number: newNumber
      })
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
      .then(() => {
        setNotificationMessage(`${newName} added to phone book`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 3000)
      })
      .catch(error => {
        console.log(error.response.data.error)
        setErrorMessage('Validation Error')
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      })
  }

  function updatePerson(personToUpdate) {
    const updatedPerson = { ...personToUpdate, number: newNumber }

    personService
      .update(personToUpdate.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson))
      })
      .then(() => {
        setNotificationMessage(`${updatedPerson.name} number in phonebook updated to ${updatedPerson.number} `)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 3000)
      })
      .catch(error => {
        console.log(error)
        setErrorMessage(`${updatedPerson.name} not found`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
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

  async function deletePerson(e) {
    const id = e.target.value

    try {
      await personService.remove(id)
      setPersons(persons.filter(person => person.id !== id))
    } catch (error) {
      console.log(error)
      setErrorMessage('Failed to delete the contact.')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
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
      <Notification message={notificationMessage} />
      <ErrorMessage message={errorMessage} />
      <NumbersList persons={persons}
        search={search}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App