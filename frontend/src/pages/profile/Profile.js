import React, { useState } from 'react'
import './profile.css'
function Profile() {
    const [userInfo, setUserInfo] = useState({name: 'John Cena',
    profilepic: 'https://statics.sportskeeda.com/editor/2018/08/bd960-1534053592-800.jpg',
    brandStatement: 'You cant see me',
    githubLink: 'github.com',
    linkedinLink: 'linkedin.com',
    portfolioLink: '',})
   
    return (
        <div className='profile-content'>
        <h2>{userInfo.name}'s Profile</h2>    
        <div className='profile-pic-wrapper'>
                <img className='profile-pic' src={userInfo.profilepic} alt=""/>
        </div>
        <h3>Brand Statement</h3>
        <textarea className='brand-statement' value={userInfo.brandStatement} onChange={(e)=>setUserInfo({brandStatement: e.target.value})}></textarea>
        <h3>Resume</h3>
        <input type='file'/>
        <h3>Cover Letter</h3>
        <input type='file'/>
        <h4>GitHub</h4>
        <input type='text' value={userInfo.githubLink}/>
        <h4>LinkedIn</h4>
        <input type='text' value={userInfo.linkedinLink}/>
        <h4>Portfolio</h4>
        <input type='text' value={userInfo.portfolioLink}/>


        </div>
    )
}

export default Profile
