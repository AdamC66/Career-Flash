import React, { useState, useEffect } from 'react'
import './userCard.css'
import main_url from '../../config.js'

function UserCard({ user }) {
    let [profile, setProfile] = useState({})
    
    useEffect(() => {
        getProfile(user.id)
    }, [])
    console.log("I'M USERCARD HERE's MY PROFILE", profile)
    const getProfile = (i) =>{        
        let userToken = window.localStorage['token']
        console.log("USERCARD LOOKING FOR PROFILE AT", `api/profiles?user_id=${i}`)

        main_url.get(`api/profiles?user_id=${i}`, {
        headers: {
            Authorization: `Token ${userToken}` 
        }
        }).then(res => {
            if (res.data[0]){
            console.log("USER PROFILE EXISTS FOR", user.first_name, '', user.last_name)
            console.log('Here it is!', res.data)
            setProfile(res.data[0])
            }
        }).catch(e=>{
            console.log(e)
            setProfile({})
    
        })
        }
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
