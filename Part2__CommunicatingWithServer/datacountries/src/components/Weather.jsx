import { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({ country }) => {
  const api_key = import.meta.env.VITE_OPENWEATHER_API_KEY
  const [ lat, lon ] = country.capitalInfo.latlng
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`


  const [currentWeather, setCurrentWeather] = useState([])

  useEffect(() => {
    axios.get(`${apiUrl}`)
         .then(res => res.data)
         .then(weather => setCurrentWeather(weather))
  }, [apiUrl])

  console.log(currentWeather)

  return (
    <h2>Current Weather</h2>
  )
}

export default Weather