import { useState, useEffect, useCallback } from "react"
import axios from "axios"

const Weather = ({ country }) => {
  const [currentWeather, setCurrentWeather] = useState({
    temp: null,
    wind: null,
    icon: null
  })
  const api_key = import.meta.env.VITE_OPENWEATHER_API_KEY
  const [ lat, lon ] = country.capitalInfo.latlng
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`
  

  const fetchWeatherData = useCallback(() => {
    axios.get(`${apiUrl}`)
          .then(res => res.data)
          .then(data => setCurrentWeather(prevWeather => {
            return { ...prevWeather,
              temp: data.main.temp,
              wind: data.wind.speed,
              icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
             }

          }))
  }, [apiUrl])  

  useEffect(() => {
    fetchWeatherData()
  }, [fetchWeatherData])

  return (
    <>
      <h2>Current Weather</h2>
      <p>Temp: {currentWeather.temp}&deg;</p>
      <img src={currentWeather.icon} alt="" />
      <p>Wind Speed: {currentWeather.wind} MPH</p>
    </>
  )   
}

export default Weather
