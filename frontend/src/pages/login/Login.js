import React, {Component} from 'react'
import axios from 'axios'
import main_url from '../../config'

class Login extends Component {
    state = {   
        email: '',
        password: '',
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value,
            username: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        
    }

    render() {
        return(
            <div className='container'>
            <h1>Login</h1>
                <form className='join-user' >
                    <br/>
                    <label for='email'><b>Email: </b>
                    <input type='text' value={this.state.email} placeholder = 'Email' name='email' onChange = {this.handleEmail}required/>
                    </label>
                    <br/><br/>
                    <label for='password'><b>Password: </b></label>
                    <input type='password' value={this.state.password} placeholder = 'Password' name='password' onChange = {this.handlePassword} required/>
                    <br/><br/>
                    <input type='submit' value='Sign-up'/>
                </form>
        </div>
        )
    }
}

export default Login