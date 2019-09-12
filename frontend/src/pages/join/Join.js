import React, {Component} from 'react'
import axios from 'axios'
import './join.css'
class Join extends Component {
    state = {   
        username: '',
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

    confirmPassword = (event) => {
        if (this.state.password === event.target.value)
            console.log('confirm password true')
        else   
            console.log('confirm password is false')
    }

    handleSubmit = (event) => {
        const user = {
            username: this.state.email,
            first_name: '',
            last_name: '',
            email: this.state.email,
            groups: [],
            password: this.state.password
        }

        console.log(user);

        axios.post("http://localhost:8000/api/users/", user)
            .then(res => {
                console.log(res);
                console.log(res.data);
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
                        <label for='email'><b>Email: </b>
                        <input type='text' value={this.state.email} placeholder = 'Email' name='email' onChange = {this.handleEmail}required/>
                        </label>
                        <br/><br/>
                        <label for='password'><b>Password: </b></label>
                        <input type='password' value={this.state.password} placeholder = 'Password' name='password' onChange = {this.handlePassword} required/>
                        <br/><br/>
                        <label for='password'><b>Confirm Password: </b></label>
                        <input type='password'  placeholder = 'Confirm Password' name='confirmPassword' onChange = {this.confirmPassword}required/>
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
