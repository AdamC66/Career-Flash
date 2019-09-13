 import React, {useState} from 'react'
import logo from './img/careerflash-logo--white---421x160.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';

function Header() {
    const [userToken, setUserToken] = useState(window.localStorage['token'])
    const [userName, setUserName] = useState('')
    if(userToken){
        Axios.get('http://localhost:8000/api/users/', {
            headers: {
                Authorization: `Token ${userToken}` 
            }
        })
        .then(res => {
            setUserName(res.data[0].email)
            console.log(res.data)
        })
    }


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
        </ul>
        <h2 className="nav-item"><a className="nav-link" href="/tracker"><FontAwesomeIcon icon={faBell}  color="rgba(255,255,255,0.5)" /></a></h2>
        <h2 className="nav-item dropdown" role='button'><a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown"><FontAwesomeIcon icon={faUser} color="rgba(255,255,255,0.5)"/> {userName}</a>
        <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(100px, 45px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
        <h5><a className="dropdown-item" href="/profile">Profile</a></h5>
        <h5><a className="dropdown-item" href="/tracker">Tracker</a>></h5>
        <div className="dropdown-divider"></div>
        <h5><a className="dropdown-item" href="#">Logout</a></h5>
      </div>
      </h2>

    </div>
   
    </nav>
 
    )
}

export default Header
