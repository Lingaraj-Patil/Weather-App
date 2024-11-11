import axios from "axios";
import { useState } from "react"
import SearchBar from "./components/search";
import WeatherDisplay from "./components/weatherDisplay";

function App() {
  const [weatherData,setWeatherDate] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  const API_KEY = '3ab36f7e2c3095d5dc13f604514753e3';

  const fetchWeatherData = async (city) => {
    setLoading(true)
    setError(null)
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`,{
        params: {
          q: city,
          units: 'metric',
          appid: API_KEY,
        },
      });
      setWeatherDate(response.data);
    }
    catch(err){
      setError("City Not Found. Please try again")
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 App">
      <div className="w-full p-6 text-center bg-white rounded-lg shadow-lg sm:w-96">
        <h1 className="mb-4 text-3xl font-semibold text-gray-800">Weather App</h1>
        <SearchBar onSearch={fetchWeatherData}/>
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <WeatherDisplay weatherData={weatherData}/>
      </div> 
    </div>
  )
}

export default App
