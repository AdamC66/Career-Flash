import React, {useState} from 'react'
import splash from './img/splash.jpg'
import "./splash.css"
import { Link } from 'react-router-dom';
function Splash() {
    const [loggedInLinks, setLoggedInLinks] = useState(
    <>
        <Link to = '/join'>
            <button className="btn btn-primary" value="join" style={{marginRight: '5px'}}>Join Now</button>
        </Link>
        <Link to = '/login'>
            <button className="btn btn-primary" value="login" style={{marginLeft: '5px'}}>Login</button>
        </Link>
    </>);

    const checkLogin = () => {
        console.log(`This User: ${window.localStorage['token']}`)
        if (window.localStorage['token'] !== 'null'){
            setLoggedInLinks(
                <Link to = '/dashboard'>
                    <button className="btn btn-primary" value="join" style={{marginRight: '5px'}}>Dashboard</button>
                </Link>
            )
        } 
    }

    window.addEventListener('load', checkLogin)


    return (
        <div>
            <div className = 'splashimg'>
                <div className='about'>
                <h1>Welcome to Career Flash</h1>
                <h4>Your Job Search Control Center</h4>
                {loggedInLinks}
                </div>
                <img src={splash} alt=""/>
            </div>
        </div>
    )
}

export default Splash
