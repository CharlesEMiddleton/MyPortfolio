import React from "react";
import WeatherAPI from "../../utilities/WeatherAPI/WeatherAPI";
import JokeAPI from "../../utilities/JokeAPI/JokeAPI";

export default function Home (){
    
    return(
        <div>  
        <h1>Hello and welcome to my page</h1>
        <WeatherAPI />
        <JokeAPI />
     </div>
)
}