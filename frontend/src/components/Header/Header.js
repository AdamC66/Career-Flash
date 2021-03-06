import React, {useState} from 'react'
import logo from './img/careerflash-logo--white---421x160.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import main_url from '../../config';

function Header() {
    const [userToken, setUserToken] = useState(window.localStorage['token'])
    const [userName, setUserName] = useState('')
    const [loginOutButton, setLoginOutButton] = useState(<h5><a className="dropdown-item" href="/login">Login</a></h5>)

    const checkLogin = () => {
        setUserToken(window.localStorage['token'])
        if(userToken !== 'null'){
            main_url.get('/api/users/', {
                headers: {
                    Authorization: `Token ${userToken}` 
                }
            })
            .then(res => {
                setUserName(res.data[0].first_name)
                console.log(res.data)
                setLoginOutButton(<h5><a className="dropdown-item" href="/" onClick={handleLogOut}>Logout</a></h5>)
            });
        }
    }


    const handleLogOut = (event) => {
        window.localStorage['token'] = null
        console.log('Logged out successfully')
        console.log(window.localStorage['token'])
        window.location.href = '/'
        event.preventDefault()
    }

    window.addEventListener('load', checkLogin) 

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
                <h4><a className="nav-link" href="/about">About</a></h4>
            </li>
            <li className="nav-item">
                <h4><a className="nav-link" href="/contact">Contact</a></h4>
            </li>
        </ul>
        <h2 className="nav-item"><a className="nav-link" href="/tracker"><FontAwesomeIcon icon={faBell}  color="rgba(255,255,255,0.5)" /></a></h2>
        <h2 className="nav-item dropdown" id="name" role='button'><a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown"><FontAwesomeIcon icon={faUser} color="rgba(255,255,255,0.5)"/> {userName}</a>
        <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate(-50px, 50px)', top: '0px', left: '0px', willChange: 'transform'}}>
        <h5><a className="dropdown-item" href="/profile">Profile</a></h5>
        <h5><a className="dropdown-item" href="/tracker">Tracker</a></h5>
        <h5><a className="dropdown-item" href="/document">My Documents</a></h5>
        <h5><a className="dropdown-item" href="/dashboard">Dashboard</a></h5>
        <div className="dropdown-divider"></div>
        {loginOutButton}
      </div>
      </h2>

    </div>
   
    </nav>
 
    )
}

export default Header
