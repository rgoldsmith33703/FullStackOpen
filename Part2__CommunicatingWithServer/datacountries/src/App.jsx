import { useState, useEffect } from 'react'
import Search from './components/Search'
import CountriesList from './components/CountriesList'
import searchService from './services/searchService'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [countriesList, setCountriesList] = useState([])

  useEffect(() => {
    searchService
      .getCountries()
      .then(initialCountries => {
        setCountriesList(initialCountries)
      })
  }, [])

  function handleSearch(e) {
    setSearchTerm(e.target.value)
  }

  
  return (
    <div>
      <Search
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        text={'find countries'}
      />
      <CountriesList 
        countriesList={countriesList}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
    </div>
  )
}

export default App