import React from "react";
import WeatherAPI from "../../utilities/WeatherAPI/WeatherAPI";
import JokeAPI from "../../utilities/JokeAPI/JokeAPI";
import './Home.css'

export default function Home (){
    
    return(
        <div className="baseContainer">  
          
      <div className="big-arrow-down"></div>
     
        <div className = "box1">
        <h1>Hello and welcome to my page</h1>
        </div>
        <div className = "box2" >
        <WeatherAPI />
        </div>
        
        <div className = "box3">
        <JokeAPI />
        </div>

     </div>
)
}