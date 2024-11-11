export default function WeatherDisplay({weatherData}){
    if(!weatherData) return null

    const {
        name,
        sys: {country,sunrise,sunset},
        main: {temp,feels_like,temp_min,temp_max,humidity},
        weather,
        wind:{speed},
    } = weatherData;

    const {description,icon} = weather[0];
    return(
        <div className="mt-4 weather-display">{
            weatherData ?(
                <>
                    <h2 className="text-2xl font-semibold text-gray-800">{name},{country}</h2>
                    <div className="mt-2 text-xl text-gray-700">
                        <p>Current Temperature: <span className="font-bold">{Math.round(temp)}°C</span></p>
                        <p>Feels Like: <span className="font-bold">{Math.round(feels_like)}°C</span></p>
                        <p>Condition: <span className="font-bold capitalize">{description.charAt(0).toUpperCase() +description.slice(1)}</span></p>
                        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} className="mx-auto mt-2"/>
                        <p>Humidity: <span className="font-bold">{humidity}%</span></p>
                        <p>Wind speed: <span className="font-bold">{speed} m/s</span></p>
                        <p>High: <span className="font-bold">{Math.round(temp_max)}°C | Low: {Math.round(temp_min)}°C</span></p>
                        <p>Sunrise: <span className="font-bold">{new Date(sunrise*1000).toLocaleTimeString()}</span></p>
                        <p>Sunset: <span className="font-bold">{new Date(sunset*1000).toLocaleTimeString()}</span></p>
                    </div>
                </>
            ) : (
                <p className="text-gray-500">No weather data available</p>
            )}
            
        </div>
    )

}