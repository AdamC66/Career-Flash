 import React from 'react'
import logo from './img/careerflash-logo--white---421x160.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'
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
            <h4><a className="nav-link" href="/">Home</a></h4>
        </li>
        <li className="nav-item">
        <h4><a className="nav-link" href="/">About</a></h4>
        </li>
        <li className="nav-item">
        <h4><a className="nav-link" href="/tracker">Tracker</a></h4>
        </li>
        </ul>
        <h2 className="nav-item"><a className="nav-link" href="/tracker"><FontAwesomeIcon icon={faBell} color="rgba(255,255,255,0.5)" /></a></h2>
        <h2 className="nav-item"><a className="nav-link" href="/profile"><FontAwesomeIcon icon={faUser} color="rgba(255,255,255,0.5)"/></a></h2>
    </div>
   
    </nav>
 
    )
}

export default header
