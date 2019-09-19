import React, {useState} from 'react'
import './join.css'
import main_url from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
function Join() {
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passClass, setPassClass] = useState('');
    const [confirmPass, setConfirmPass] = useState('hidden-pw');
    
    const confirmPassword = (event) => {
        if (password !== event.target.value){
            console.log('passwordDoesnt')
            setPassClass('error-pass');
            setConfirmPass('pass-not-match')
        } else {
            console.log('passwordMatches')
            setPassClass('correct');
            setConfirmPass('hidden-pw')
            }
        }


    const handleSubmit = (event) => {
        if (passClass !== 'correct') {
            alert('please ensure that your password matches');
        } else {
            const user = {
                username: email,
                first_name: first_name,
                last_name: last_name,
                email: email,
                groups: [],
                password: password
            }

            main_url.post("/api/users/", user)
                .then(() => {
                    const loginInfo = {
                        username: email,
                        password: password
                    }
                    main_url.post("/api-token-auth/", loginInfo)
                    .then(res => {
                        window.localStorage['token'] = res.data['token']
                    }).then(() => {
                        main_url.get("/api/users/", {
                            headers: {
                                Authorization: `Token ${window.localStorage['token']}`
                            }
                        }
                    ).then(res => {
                        const profileCreate = {
                            owner: res.data[0].id,
                            profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                            github: 'https://github.com',
                            linkedin: 'https://linked.com',
                            portfolio: 'https://PortfolioLink.com'
                        }
                        main_url.post('/api/profiles/', profileCreate, {
                            headers: {
                                Authorization: `Token ${window.localStorage['token']}`
                            }
                        }
                    ).then(() => {
                        if(window.localStorage['token'] !== 'null'){
                            window.location.href = '/profile';
                        }
                    }
                    )})
                    })
                }).catch(e => {
                    console.log(e)
                    alert('Please ensure that you have the correct email')
                })

            }
            
        event.preventDefault();
    }

    const checkLogin = () => {
        if(window.localStorage['token'] !== 'null'){
            window.location.href = '/profile'
        };
    };

    window.addEventListener('load', checkLogin) 

    return (
        <div className='container card border-primary mb-3'>
            <h1>JOIN NOW</h1>
            <form className='"card text-white bg-dark mb-3"' onSubmit={handleSubmit}>
                <h2 className='card-header'>Create Account</h2>
                <div className='card-body'>
                <label htmlFor='email'><b><FontAwesomeIcon icon={faEnvelope} color="white"/> Email: </b>
                <input type='text' value={email} placeholder = 'Email' name='email' onChange = {(e)=> setEmail(e.target.value)}required/>
                </label>
                <br/><br/>
                <label htmlFor='first_name'><b>First Name: </b>
                <input type='text' value={first_name} placeholder = 'First Name' name='first_name' onChange = {(e)=> setFirstName(e.target.value)}required/>
                </label>
                <br/><br/>
                <label htmlFor='first_name'><b>Last Name: </b>
                <input type='text' value={last_name} placeholder = 'Last Name' name='last_name' onChange = {(e)=> setLastName(e.target.value)}required/>
                </label>
                <br/><br/>
                <label htmlFor='password'><b><FontAwesomeIcon icon={faKey} color="white"/> Password:  </b>
                <input type='password' value={password} placeholder = 'Password' name='password' onChange = {(e)=> setPassword(e.target.value)}required/>
                </label>
                <br/><br/>
                <label htmlFor='password'><b>Confirm Password: </b>
                <input type='password' className={passClass}  placeholder = 'Confirm Password' name='confirmPassword' onChange = {confirmPassword}required/>
                <p className={confirmPass}>Password does not match</p>
                </label>
                <br/><br/>
                <input type='submit' value='Sign-up'/>
                <p>You can use Career Flash and all it's features as an individual user, you sill have access to all our features</p>
                </div>
            </form>
        </div>
    )
}
// ReactDOM.render(<Join/>, document.getElementById('join'));
export default Join
