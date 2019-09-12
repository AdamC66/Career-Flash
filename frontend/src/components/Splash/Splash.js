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
                <h4>Your Job Search Control Center</h4>
                <Link to = '/join'>
                <button className="btn btn-primary" value="join" >Join Now</button>
                </Link>
                </div>
                <img src={splash} alt=""/>
                
            </div>
        </div>
    )
}

export default Splash
