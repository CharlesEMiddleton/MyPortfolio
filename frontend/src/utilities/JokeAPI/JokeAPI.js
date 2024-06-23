import { useState } from 'react';
import { JokeClass } from './JokeAPIClasses';
import './joke.css';
export default function JokeAPI(){
    const [joke, setJoke] = useState(null);
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response)=>response.json() )
        .then((jokeData)=>{
            setJoke(new JokeClass(jokeData));
            setPressed(true);
        })     
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
    }

    return(
    <div className = "jokeContainer">
        <button
        onClick={handleClick}>
            press this button for a joke
        </button>
        {pressed && (
            <h2>{joke.setup} {joke.punchline}</h2>
        )}
    </div>
    )
}