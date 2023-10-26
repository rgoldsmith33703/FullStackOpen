import React from 'react'

export default function NumbersList({ search, persons, deletePerson }) {
  function numbersList(search) {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    const listItems = filteredPersons.map(person => (
      <p key={person.id}>
        {person.name} {person.number}
        <button value={person.id} onClick={deletePerson}>Delete</button>
      </p>
    ))
    return listItems
  }

  return numbersList(search)
}