import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div className = "nav-container">
            <Link to = "/about">About</Link>
            <Link to = "/work">Work</Link>
            <Link to = "/contact">Contact</Link>
        </div>
    )
}


export default Navigation;