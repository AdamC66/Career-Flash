import React, {useState} from 'react'
import main_url from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

function Contact()  {
    const[name, setName] = useState ('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');
    
    const handleSubmit = (event) => {
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
            window.location.reload()
        })
        .then(() => {
            if(window.localStorage['token'] !== 'null'){
                window.location.href = '/profile'
            }});
        event.preventDefault();
        }
        
        return(
            <div className='card text-white bg-secondary mb-3' style={{width: "80%", margin:"0 auto", textAlign:"center"}}>
                <h1>Contact Us</h1>
                <form className='card bg-primary mb-3' style={{width: "80%", margin:"0 auto"}} onSubmit = {handleSubmit}>
                    <br/>
                    <label htmlFor='name'><b><FontAwesomeIcon icon={faEnvelope} color="white"/>Name: </b>
                    <input type='text' className="form-control" style={{width: "60%", margin:"0 auto"}} value={name} placeholder = 'Name' name='name' onChange = {(e)=> setName(e.target.value)}required/>
                    </label>
                    <br/>
                    <label htmlFor='email'><b><FontAwesomeIcon icon={faEnvelope} color="white"/>Email: </b>
                    <input type='text' className="form-control" style={{width: "60%", margin:"0 auto"}} value={email} placeholder = 'Email' name='email' onChange = {(e)=> setEmail(e.target.value)}required/>
                    </label>
                    <br/>
                    <label htmlFor='message'><b><FontAwesomeIcon icon={faEnvelope} color="white"/>Message: </b>
                    <textarea name='message' className="form-control" style={{width: "60%", margin:"0 auto"}} value={message} placeholder="Message" onChange={e => setMessage(e.target.value)}> </textarea>
                    <br/>
                    <input className="btn btn-secondary" style={{width: "60%", margin:"20px auto"}}  type='submit' value='Submit'/>
                </form>
            </div>
        )
    }

}

export default Contact;
