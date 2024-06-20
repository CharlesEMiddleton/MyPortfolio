import React from 'react';
import './NavbarStyles.css';
export default function Navbar() {

    return(
        <nav className = "nav">
            <ul>
                <li className = "active">
                    <a href ="/home">Home</a>
                </li>
                <li>           
                 <a href ="/about">About</a>
                </li>
                <li>
                 <a href ="/projects">Projects</a>
              
                </li>
                <li>
                    <a href ="/contact">Contact</a>
                </li>
            </ul>
        </nav>

    )
}