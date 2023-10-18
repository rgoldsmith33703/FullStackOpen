import { useMemo } from "react"
import FilteredCountriesList from "./FilteredCountriesList"
import CountryInfo from "./CountryInfo"



const CountriesList = ({ searchTerm, setSearchTerm,countriesList }) => {


  let filteredCountries = useMemo(() => {
    return countriesList.filter(country => {
      return country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }, [searchTerm, countriesList])

  function showCountry(e) {
    filteredCountries = filteredCountries.filter(country => (country.name.common === e.target.value))
    setSearchTerm(e.target.value) // updates search box and forces re-render
  }

  function renderFilteredCountries(filteredCountries) {
    if (searchTerm === '') {
      return <p>Please enter a search query.</p>
    } else if (filteredCountries.length >= 10) {
        return <p>Please enter a more specific search query.</p>
    } else if (filteredCountries.length > 1) {
        return <FilteredCountriesList 
                  filteredCountries={filteredCountries}
                  handleClick={showCountry}/>
    } else if (filteredCountries.length === 1) {
        return <CountryInfo 
                  filteredCountries={filteredCountries}/>
    } 
  }

  return (
    <>
      {renderFilteredCountries(filteredCountries)}
    </>
  )
}

export default CountriesList

