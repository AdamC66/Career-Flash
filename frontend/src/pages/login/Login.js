import React, {Component} from 'react'
import axios from 'axios'
import main_url from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
class Login extends Component {
    state = {   
        email: '',
        password: '',
        token: '',
        body: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleLogOut = () => {
        window.localStorage['token'] = null
    }
    
    handleSubmit = (event) => {
        const user = {
            username: this.state.email,
            password: this.state.password
        }

        console.log('this is running')

        axios.post("http://localhost:8000/api-token-auth/", user)
        .then(res => {
            window.localStorage['token'] = res.data['token']
            // this.setState({
            //     token: res.data['token'],
            // })
            // console.log(this.state.token)
        })
        
        event.preventDefault();
    }

    getInfo = () => {
        const loginToken = window.localStorage['token']

        axios.get('http://localhost:8000/api/users/', {
            headers: {
                Authorization: `Token ${loginToken}` 
            }
        })
        .then(res => {
            console.log(res.data)
        })
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
                <button className="btn btn-primary" style={{width: "60%", margin:"20px auto"}} onClick = {this.getInfo}>test</button>
                <h1>{this.state.body}</h1>
            </div>
        )
    }
}

export default Login