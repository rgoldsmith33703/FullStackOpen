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
        text={'find countries'}
        handleSearch={handleSearch}
      />
      <CountriesList countriesList={countriesList} />
    </div>
  )
}

export default App