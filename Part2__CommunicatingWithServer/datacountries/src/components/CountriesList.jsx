

const CountriesList = ({ countriesList }) => {

  return (
    <>
      {countriesList.map(country => {
        return (
          <p key={country.cca3}>{country.name.common}</p>
        )
      })}
    </>
  )
}

export default CountriesList