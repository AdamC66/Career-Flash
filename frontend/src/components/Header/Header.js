 import React from 'react'
import logo from './img/careerflash-logo--white---421x160.png'
import './Header.css'

function header() {
    return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='logo'> <a class="navbar-brand" href="/"><img src={logo} alt=""></img></a> </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/profile">Profile</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/tracker">Tracker</a>
        </li>
        </ul>
    </div>
    </nav>
 
    )
}

export default header
