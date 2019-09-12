 import React from 'react'
import logo from './img/careerflash-logo--white---421x160.png'
import './Header.css'

function header() {
    return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='logo'> <a className="navbar-brand" href="/"><img src={logo} alt=""></img></a> </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/profile">Profile</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/tracker">Tracker</a>
        </li>
        </ul>
    </div>
    </nav>
 
    )
}

export default header
