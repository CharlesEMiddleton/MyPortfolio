import { useState, useEffect } from 'react';
import { API_KEY } from '../URLs';
import { WeatherClass } from './WeatherAPIClasses';
export default function WeatherAPI(){
    const [weather, setWeather] = useState(new WeatherClass());
    var prompt = `I live in ${weather.location.name},  ${weather.location.region} in the ${weather.location.country} where it is currently ${weather.current.temp_f} degrees but it feels like ${weather.current.feelslike_f}!`;

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Columbia`)
        .then((response) => response.json())
        .then((weatherData) => {
            console.log(weatherData);
            setWeather(new WeatherClass(weatherData))
        });
    }, []);

    return(
        <div>
        <h1>If you were wondering hows the weather where I am, here ya go!</h1>
        {weather && (
            <div>
                {prompt}
            </div>
        )}
        </div>
    );
}