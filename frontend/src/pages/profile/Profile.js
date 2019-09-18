import React, { useState } from 'react'
import './profile.css'
import MyDocument from '../../components/MyDocument/MyDocument';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import EditModal from '../../components/EditModal/EditModal';
import main_url from '../../config';
import githubicon from './github.jpg'
import linkedinicon from './linkedin.png'
import portfolioicon from './portfolio.png'

function Profile() {
    const [userName, setUserName] = useState('John Cena')
    const [userProfilePic, setUserProfilePic] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    const [userBrandStatement, setUserBrandStatement] = useState("You cant see me")
    const [githubLink, setGithubLink] = useState("https://github.com")
    const [linkedinLink, setLinkedinLink] = useState("https://linkedin.com")
    const [portfolioLink, setPortfolioLink] = useState("1234567Portfolio Link")
    const [resumeLink, setResumeLink] = useState ("")
    const [coverLink, setCoverLink] = useState ("")
    const [modalOpen, setModalOpen] = useState(false)
    const [userID, setUserID] = useState('')
    const [profileid, setProfileID] = useState()
    const handleEditButton = ()=>{
        let editButton = document.querySelector(".editbutton")
        editButton.classList.toggle("hidden")
        
    }
    
    const checkLogin = () => {
        const userToken = window.localStorage['token']
        let url = '/api/profiles/'
        let search = window.location.search;
        if (search){
            url = `/api/profiles${search}`
        }
        console.log('URL', url)
        if(userToken !== 'null'){
            main_url.get(url, {
                headers: {
                    Authorization: `Token ${userToken}` 
                }
            })
            .then(res => {
                console.log(res.data[0])
                if (res.data[0]){
                setUserBrandStatement(res.data[0].brand_statement);
                setGithubLink(res.data[0].github);
                setLinkedinLink(res.data[0].linkedin);
                setPortfolioLink(res.data[0].portfolio);
                setUserName(res.data[0].user_name)
                setProfileID(res.data[0].id)
                console.log(res.data[0])
                if (res.data[0].resume){
                    setResumeLink(res.data[0].resume.substr(50));
                }
                if (res.data[0].cover_letter){
                    setCoverLink(res.data[0].cover_letter.substr(50));
                }
                console.log(res.data)
            }
            });
            main_url.get('/api/users', {
                headers: {
                    Authorization: `Token ${userToken}` 
                }
            })
            .then(res => {
                setUserID(res.data[0].id)
            })
        }
    }
    
    window.addEventListener('load', checkLogin) 

    return (
        <div className='profile-content'>
            <EditModal setModalOpen={setModalOpen} modalOpen={modalOpen} 
            setUserProfilePic = {setUserProfilePic}
            profileid = {profileid}
            setUserBrandStatement = {setUserBrandStatement}
            setGithubLink = {setGithubLink}
            setLinkedinLink = {setLinkedinLink}
            setPortfolioLink = {setPortfolioLink}
            userProfilePic = {userProfilePic}
            userBrandStatement = {userBrandStatement}
            githubLink = {githubLink}
            linkedinLink = {linkedinLink}
            portfolioLink = {portfolioLink}
            userToken = {window.localStorage['token']}
            userID = {userID}
            />

            <div className="card text-white bg-dark mb-3" id="profile-header" onMouseEnter={()=>handleEditButton()} onMouseLeave={()=>handleEditButton()}>
                <div id="profile-name"><h2 className="card-header" >{userName}'s Profile</h2></div>
                <div className="card-body" id="profile-card1">
                    <div className='profile-pic-wrapper'>
                    <img className='profile-pic' src={userProfilePic} alt=""/>
                    </div>
                </div>
                <div className="card-body" id="profile-card2" >
                    <div className="brand-statement-wrapper"> 
                        <p>{userBrandStatement} </p> 
                        <button className="hidden editbutton" onClick={()=>setModalOpen(true)}> Edit </button>
                    </div>
                    <h5><div className='icon'><img src={githubicon} alt=""/></div><a href={githubLink}>{githubLink.slice(7,)}</a></h5>
                    <h5><div className='icon'> <img src={linkedinicon} alt=""/> </div><a href={linkedinLink}>{linkedinLink.slice(7,)}</a></h5>
                    <h5><div className='icon'><img src={portfolioicon} alt=""/></div><a href={portfolioLink}>{portfolioLink}</a></h5>

                </div>
            </div>
            <div className="document-wrapper">
                <div className="resume-wrapper">
                    Resume Here 
                    <MyDocument path={resumeLink} width={400}/>
                </div>
                <div className="coverletter-wrapper">
                    Cover Letter Here
                    <MyDocument path={coverLink} width={400}/>
                </div>

            </div>
        </div>
        
    )
}

export default Profile
