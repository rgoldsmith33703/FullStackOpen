import axios from "axios"
const baseUrl = ' https://studies.cs.helsinki.fi/restcountries/api/all/'


function getCountries() {
  const req = axios.get(`${baseUrl}`)
  return req.then(res => res.data)
}
  
export default { getCountries }