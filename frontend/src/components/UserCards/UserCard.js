import React, { useState, useEffect } from 'react'
import './userCard.css'


function UserCard({ user, getProfile }) {
    let profile = {}
    
    useEffect(() => {
        profile = getProfile(user.id)
    })
    console.log("I'M USERCARD HERE's MY PROFILE", profile)

    const getColor = (field) =>{
        let color = 'red'
        if (profile){
            if (profile[field]){
                color='green' 
            }else color='red'
        }else{
        }
        return (color)
    }

    return (
        <div className="card text-white bg-dark mb-3" style={{width: '95%', margin: '0 auto'}}>
            <div className="card-header">
                <h2><a href={`/profile?user_id=${user.id}`} style={{color: 'white'}}>{user.first_name} {user.last_name}</a></h2>
            </div>
            <div className="userData">
            <span className="submittal-status brand-statement"> Brand Statement
                <div className="Statuscircle" style={{background: getColor('brand_statement')}}/>
            </span>
            <span className="submittal-status github" > Github
                <div className="Statuscircle" style={{background: getColor('github')}}/>
            </span>
            <span className="submittal-status linkedin"> Linkedin
                <div className="Statuscircle" style={{background: getColor('linkedin')}} />
            </span>
            <span className="submittal-status portfolio"> Portfolio
            <div className="Statuscircle" style={{background: getColor('portfolio')}}/>    
            </span>
            
            <span className="submittal-status resume"> Resume
                <div className="Statuscircle" style={{background: getColor('resume')}}/>
            </span>
            <span className="submittal-status coverletter"> Cover Letter
                <div className="Statuscircle" style={{background: getColor('cover_letter')}} />
            </span>
            </div>
        </div>
    )
}

export default UserCard
