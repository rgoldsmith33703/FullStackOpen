export default function NumbersList({search, persons}) {
  function numbersList(search) {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
    const listItems = filteredPersons.map(person => (
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    ));
    return listItems;
  } 
  
  return numbersList(search)
}