const FilteredCountriesList = ({ filteredCountries, handleClick }) => {
  return (
    filteredCountries.map(country => {
      return (
        <p key={country.cca3}>{country.name.common}<button style={{marginLeft: 3}} onClick={handleClick} value={country.name.common}>Show</button></p>
      )
    })
  )
}

export default FilteredCountriesList