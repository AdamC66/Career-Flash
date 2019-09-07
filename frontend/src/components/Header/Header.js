 import React from 'react'
import './Header.css'
import logo from './img/careerflash-logo--white---421x160.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../../pages/app/App'
function header() {
    return (
        <header>
        <Router>
        <nav>
            <div className ='nav-left'>
                <div className = 'logo'>
                    <Link to='/'>
                    <img src={logo} alt=""/>
                    </Link>
                </div>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div className = 'nav-center'>

            </div>
            <div className = 'nav-right'>
                <ul className="menu">
                    <li><a href="#">Notifications</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
        <Route path="/" exact component={App} />
        </Router>
    </header>
    )
}

export default header
