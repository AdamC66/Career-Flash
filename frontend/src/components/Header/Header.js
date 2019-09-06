import React from 'react'
import './Header.css'
import logo from './img/careerflash-logo--white---421x160.png'

function header() {
    return (
        <header>
        <nav>
            <div className ='nav-left'>
                <div className = 'logo'>
                    <a href="#"><img src={logo} alt=""/></a> 
                </div>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div className = 'nav-center'>

            </div>
            <div className = 'nav-right'>

            </div>
        </nav>
    </header>
    )
}

export default header
