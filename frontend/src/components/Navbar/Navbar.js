import React from 'react';
import './NavbarStyles.css';
import {Link} from 'react-router-dom'
export default function Navbar() {

    return(
        <nav className = "nav">
            <ul>
                <li className = "active">
                    <Link to ="/home">Home</Link>
                </li>
                <li>           
                 <Link to ="/about">About</Link>
                </li>
                <li>
                 <Link to ="/projects">Projects</Link>
              
                </li>
                <li>
                    <Link to ="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

    )
}