import React from 'react'
import splash from './img/splash.jpg'
import "./splash.css"
import { Link } from 'react-router-dom';
function Splash() {
    return (
        <div>
            <div className = 'splashimg'>
                <div className='about'>
                <h1>Welcome to Career Flash</h1>
                <h3>Your Job Search Control Center</h3>
                </div>
                <img src={splash} alt=""/>
                <Link to = '/join'>
                <button className="btn" value="join" >Join Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Splash
