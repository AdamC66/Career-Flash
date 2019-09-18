import React, {useState} from 'react'
import main_url from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
function Login()  {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const handleLogin = (event) => {
        const user = {
            username: email,
            password: password
        }

        main_url.post("/api-token-auth/", user)
        .then(res => {
            window.localStorage['token'] = res.data['token']
            console.log(window.localStorage['token'])
        }).catch(() => {
            alert('Incorrect login credentials, please try again');
            setPassword('');
        })
        .then(() => {
            if(window.localStorage['token'] !== 'null'){
                window.location.href = '/'
            }});
        event.preventDefault();
        }

        const checkLogin = () => {
            if(window.localStorage['token'] !== 'null'){
                window.location.href = '/profile'
            };
        };
    
        window.addEventListener('load', checkLogin) 
        
    return(
        <div className='card text-white bg-secondary mb-3' style={{width: "80%", margin:"0 auto", textAlign:"center"}}>
            <h1>Login</h1>
            <form className='card bg-primary mb-3' style={{width: "80%", margin:"0 auto"}} onSubmit = {handleLogin}>
                <br/>
                <label htmlFor='email'><b><FontAwesomeIcon icon={faEnvelope} color="white"/>Email: </b>
                <input type='text' className="form-control" style={{width: "60%", margin:"0 auto"}} value={email} placeholder = 'Email' name='email' onChange = {(e)=> setEmail(e.target.value)}required/>
                </label>
                <br/>
                <label htmlFor='password'><b><FontAwesomeIcon icon={faKey} color="white"/>Password: </b></label>
                <input type='password' className="form-control" style={{width: "60%", margin:"0 auto"}} value={password} placeholder = 'Password' name='password' onChange = {(e)=> setPassword(e.target.value)} required/>
                <br/>
                <input className="btn btn-secondary" style={{width: "60%", margin:"20px auto"}}  type='submit' value='Login'/>
            </form>
        </div>
    )
}

export default Login