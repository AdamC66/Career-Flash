import React, {Component} from 'react'
import axios from 'axios'
import main_url from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
class Login extends Component {
    state = {   
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    
    handleSubmit = (event) => {
        const user = {
            username: this.state.email,
            password: this.state.password
        }

        main_url.post("/api-token-auth/", user)
        .then(res => {
            window.localStorage['token'] = res.data['token']
        }).catch(e => {
            console.log(e)
        }).then(() => {
            if(window.localStorage['token'] != 'null'){
                this.props.history.push('/profile')
                window.location.reload()
            } else {
                alert('incorrect login, please try again')
        }})
        event.preventDefault();
    }


    render() {
        return(
            <div className='card text-white bg-secondary mb-3' style={{width: "80%", margin:"0 auto", textAlign:"center"}}>
                <h1>Login</h1>
                <form className='card bg-primary mb-3' style={{width: "80%", margin:"0 auto"}} onSubmit = {this.handleSubmit}>
                    <br/>
                    <label htmlFor='email'><b><FontAwesomeIcon icon={faEnvelope} color="white"/>Email: </b>
                    <input type='text' className="form-control" style={{width: "60%", margin:"0 auto"}} value={this.state.email} placeholder = 'Email' name='email' onChange = {this.handleChange}required/>
                    </label>
                    <br/>
                    <label htmlFor='password'><b><FontAwesomeIcon icon={faKey} color="white"/>Password: </b></label>
                    <input type='password' className="form-control" style={{width: "60%", margin:"0 auto"}} value={this.state.password} placeholder = 'Password' name='password' onChange = {this.handleChange} required/>
                    <br/>
                    <input className="btn btn-secondary" style={{width: "60%", margin:"20px auto"}}  type='submit' value='Login'/>
                </form>
            </div>
        )
    }
}

export default Login