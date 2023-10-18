import axios from "axios"
const baseUrl = ' https://studies.cs.helsinki.fi/restcountries/api/all/'
// const searchUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'


function getCountries() {
  const req = axios.get(`${baseUrl}`)
  return req.then(res => res.data)
}
  
export default { getCountries }