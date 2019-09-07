import React from 'react'
import './join.css'
function Join() {
    return (
        <div className='container'>
            <h1>JOIN NOW</h1>
            <div className="join-org">
                <h2>Create a New Group</h2>
                <p>By creating a group, you can invite users and keep track their job search process. This is designed for career centers. </p>
                <button className='btn'> Create a Group </button>
            </div>
            <div className="join-user">
                <h2>Join as an Individual</h2>
                <p>You can use Career Flash and all it's features as an individual user, you sill have access to all our features</p>
                <button className='btn'> Join Now! </button>
            </div>
        </div>
    )
}

export default Join
