import React, { useState } from 'react'
import './profile.css'
function Profile() {
    const [userName, setUserName] = useState('John Cena')
    const [userProfilePic, setUserProfilePic] = useState('https://statics.sportskeeda.com/editor/2018/08/bd960-1534053592-800.jpg')
    const [userBrandStatement, setUserBrandStatement] = useState("You cant see me")
    const [githubLink, setGithubLink] = useState("github.com")
    const [linkedinLink, setLinkedinLink] = useState("linkedin.com")
    const [portfolioLink, setPortfolioLink] = useState("")
    return (
        <div className='profile-content'>
        <h2>{userName}'s Profile</h2>    
        <div className='profile-pic-wrapper'>
                <img className='profile-pic' src={userProfilePic} alt=""/>
        </div>
        <h3>Brand Statement</h3>
        <textarea className='brand-statement' value={userBrandStatement} name="brandStatement" onChange={(e)=>setUserBrandStatement(e.target.value)}></textarea>
        <h3>Resume</h3>
        <input type='file'/>
        <h3>Cover Letter</h3>
        <input type='file'/>
        <h4>GitHub</h4>
        <input type='text' value={githubLink} name="githubLink" onChange={(e)=>setGithubLink(e.target.value)}/>
        <h4>LinkedIn</h4>
        <input type='text' value={linkedinLink} name="linkedinLink" onChange={(e)=>setLinkedinLink(e.target.value)}/>
        <h4>Portfolio</h4>
        <input type='text' value={portfolioLink} name="portfolioLink" onChange={(e)=>setPortfolioLink(e.target.value)}/>


        </div>
    )
}

export default Profile
