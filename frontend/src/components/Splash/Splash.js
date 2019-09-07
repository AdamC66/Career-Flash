import React from 'react'
import splash from './img/splash.jpg'
import "./splash.css"

function Splash() {
    return (
        <div>
            <div className = 'splashimg'>
                <div className='about'>
                <h1>Welcome to Career Flash</h1>
                <h3>Your Job Search Control Center</h3>
                </div>
                <img src={splash} alt=""/>
                <button className="btn" value="join">Join Now</button>
            </div>
        </div>
    )
}

export default Splash
