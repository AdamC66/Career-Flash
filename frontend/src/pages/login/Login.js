import React, {Component} from 'react'
import axios from 'axios'
import main_url from '../../config'

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
        // console.log(loginToken['token'])

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
            <div className='container'>
                <h1>Login</h1>
                    <form className='join-user' onSubmit = {this.handleSubmit}>
                        <br/>
                        <label htmlFor='email'><b>Email: </b>
                        <input type='text' value={this.state.email} placeholder = 'Email' name='email' onChange = {this.handleChange}required/>
                        </label>
                        <br/><br/>
                        <label htmlFor='password'><b>Password: </b></label>
                        <input type='password' value={this.state.password} placeholder = 'Password' name='password' onChange = {this.handleChange} required/>
                        <br/><br/>
                        <input type='submit' value='Sign-up'/>
                    </form>
                <button onClick = {this.getInfo}>test</button>
                <h1>{this.state.body}</h1>
            </div>
        )
    }
}

export default Login