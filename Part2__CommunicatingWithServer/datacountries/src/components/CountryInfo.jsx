import LanguageList from "./LanguageList"

const CountryInfo = ({filteredCountries}) => {
  const country = filteredCountries[0]
  const languages = country.languages

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h2>Languages</h2>
      <ul>
        <LanguageList languages={languages}/>
      </ul>
      <img src={country.flags.png} alt={country.flags.alt}/>
    </>
  )
}

export default CountryInfo