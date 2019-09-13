import React, {Component} from 'react'
import axios from 'axios'
import './join.css'
import main_url from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
class Join extends Component {
    state = {   
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        passClass: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    confirmPassword = (event) => {
        if (this.state.password !== event.target.value){
            console.log('password not right')
            this.setState({
                passClass: 'wrong_pass'
            })
        } else {
            console.log('password matches');
            this.setState({
                passClass: 'correct'
            })
        }
    }

    handleSubmit = (event) => {
        const user = {
            username: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            groups: [],
            password: this.state.password
        }

        main_url.post("/api/users/", user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(e => {
                console.log(e);
            })
        event.preventDefault();
    }

    render() {
        return (
            <div className='container card border-primary mb-3'>
                <h1>JOIN NOW</h1>
                <form className='"card text-white bg-dark mb-3"' onSubmit={this.handleSubmit}>
                    <h2 className='card-header'>Create Account</h2>
                    <div className='card-body'>
                    <label for='email'><b><FontAwesomeIcon icon={faEnvelope} color="white"/> Email: </b>
                    <input type='text' value={this.state.email} placeholder = 'Email' name='email' onChange = {this.handleChange}required/>
                    </label>
                    <br/><br/>
                    <label for='first_name'><b>First Name: </b>
                    <input type='text' value={this.state.first_name} placeholder = 'First Name' name='first_name' onChange = {this.handleChange}required/>
                    </label>
                    <br/><br/>
                    <label for='first_name'><b>Last Name: </b>
                    <input type='text' value={this.state.last_name} placeholder = 'Last Name' name='last_name' onChange = {this.handleChange}required/>
                    </label>
                    <br/><br/>
                    <label for='password'><b><FontAwesomeIcon icon={faKey} color="white"/>Password:  </b>
                    <input type='password' value={this.state.password} placeholder = 'Password' name='password' onChange = {this.handleChange}required/>
                    </label>
                    <br/><br/>
                    <label for='password'><b>Confirm Password: </b>
                    <input type='password' className={this.state.passClass}  placeholder = 'Confirm Password' name='confirmPassword' onChange = {this.confirmPassword}required/>
                    </label>
                    <br/><br/>
                    <input type='submit' value='Sign-up'/>
                    <p>You can use Career Flash and all it's features as an individual user, you sill have access to all our features</p>
                    </div>
                </form>
            </div>
        )
    }
}
// ReactDOM.render(<Join/>, document.getElementById('join'));
export default Join
