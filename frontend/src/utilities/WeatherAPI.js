import { useState, useEffect } from 'react';
import { API_KEY } from './URLs';
export default function WeatherAPI(){
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?${API_KEY}&q=Columbia`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setWeather(data);
        });
    }, []);
    return(
        <div>
        <h1>Hows the weather?</h1>
        {weather && (
            <div>
            <h2>{weather.name}</h2>
         
            </div>
        )}
        </div>
    );
}