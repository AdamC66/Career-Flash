import React, { useState } from 'react'
import './profile.css'
import MyDocument from '../../components/MyDocument/MyDocument';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
function Profile() {
    const [userName, setUserName] = useState('John Cena')
    const [userProfilePic, setUserProfilePic] = useState('https://statics.sportskeeda.com/editor/2018/08/bd960-1534053592-800.jpg')
    const [userBrandStatement, setUserBrandStatement] = useState("You cant see me")
    const [githubLink, setGithubLink] = useState("github.com")
    const [linkedinLink, setLinkedinLink] = useState("linkedin.com")
    const [portfolioLink, setPortfolioLink] = useState("")
    return (
        <div className='profile-content'>


            <div className="card text-white bg-dark mb-3" id="profile-header">
                <div id="profile-name"><h2 className="card-header" >{userName}'s Profile</h2></div>
                <div className="card-body" id="profile-card1">
                    <div className='profile-pic-wrapper'>
                    <img className='profile-pic' src={userProfilePic} alt=""/>
                    </div>
                </div>
                <div className="card-body" id="profile-card2">
                    <div className="brand-statement-wrapper"> <p>{userBrandStatement} </p> </div>
                    <h5><i className="fab fa-github"></i><a href={githubLink}>{githubLink}</a></h5>
                    <h5><i className="fab fa-linkedin"></i><a href={linkedinLink}>{linkedinLink}</a></h5>
                    <h5><i className="fas fa-desktop"></i><a href={portfolioLink}>{portfolioLink}</a></h5>
                </div>
            </div>
            <div className="document-wrapper">
                <div className="resume-wrapper">
                    Resume Here
                    <MyDocument path="test.pdf" width={400}/>
                </div>
                <div className="coverletter-wrapper">
                    Cover Letter Here
                    <MyDocument path="test2.pdf" width={400}/>
                </div>

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
