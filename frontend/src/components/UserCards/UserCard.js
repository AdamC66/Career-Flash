import React from 'react'
import './userCard.css'

function UserCard({userProfile}) {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">
                <h2>User Name Here</h2>
            </div>
            <div className="userData">
            <span className="submittal-status brand-statement"> Brand Statement
                <div className="Statuscircle" style={{background: userProfile.brandStatement ? 'green' : 'red'}}/>
            </span>
            <span className="submittal-status github" > Github
                <div className="Statuscircle" style={{background: userProfile.github ? 'green' : 'red'}}/>
            </span>
            <span className="submittal-status linkedin"> Linkedin
                <div className="Statuscircle" style={{background: userProfile.linkedin ? 'green' : 'red'}} />
            </span>
            <span className="submittal-status portfolio"> Portfolio
            <div className="Statuscircle" style={{background: userProfile.portfolio ? 'green' : 'red'}}/>    
            </span>
            
            <span className="submittal-status resume"> Resume
                <div className="Statuscircle" style={{background: userProfile.resume ? 'green' : 'red'}}/>
            </span>
            <span className="submittal-status coverletter"> Cover Letter
                <div className="Statuscircle" style={{background: userProfile.cover_letter ? 'green' : 'red'}} />
            </span>
            </div>
        </div>
    )
}

export default UserCard
