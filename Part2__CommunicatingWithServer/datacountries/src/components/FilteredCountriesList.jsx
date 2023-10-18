const FilteredCountriesList = ({ filteredCountries }) => {
  return (
    filteredCountries.map(country => {
      return (
        <p key={country.cca3}>{country.name.common}</p>
      )
    })
  )
}

export default FilteredCountriesList