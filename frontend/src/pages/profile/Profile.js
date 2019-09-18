import React, { useState } from 'react'
import './profile.css'
import MyDocument from '../../components/MyDocument/MyDocument';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import EditModal from '../../components/EditModal/EditModal';
import main_url from '../../config';


function Profile() {
    const [userName, setUserName] = useState('John Cena')
    const [userProfilePic, setUserProfilePic] = useState('https://66.media.tumblr.com/21013e0f67dc281ffda213bb7d3b83bc/tumblr_o5e8kzoGl01uyie96o1_250.jpg')
    const [userBrandStatement, setUserBrandStatement] = useState("You cant see me")
    const [githubLink, setGithubLink] = useState("https://github.com")
    const [linkedinLink, setLinkedinLink] = useState("https://linkedin.com")
    const [portfolioLink, setPortfolioLink] = useState("")
    const [resumeLink, setResumeLink] = useState ("")
    const [coverLink, setCoverLink] = useState ("")
    const [modalOpen, setModalOpen] = useState(false)
    const [userID, setUserID] = useState('')

    const handleEditButton = ()=>{
        let editButton = document.querySelector(".editbutton")
        editButton.classList.toggle("hidden")
        
    }

    const checkLogin = () => {
        const userToken = window.localStorage['token']
        if(userToken !== 'null'){
            main_url.get('/api/profiles/', {
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
                setUserName(res.data[0].first_name)
                setUserID(res.data[0].id)
            })
        }
    }
    
    window.addEventListener('load', checkLogin) 

    return (
        <div className='profile-content'>
            <EditModal setModalOpen={setModalOpen} modalOpen={modalOpen} 
            setUserProfilePic = {setUserProfilePic}
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
                    <h5><i className="fab fa-github"></i><a href={githubLink} target="_blank">{githubLink.slice(8,)}</a></h5>
                    <h5><i className="fab fa-linkedin"></i><a href={linkedinLink} target="_blank">{linkedinLink.slice(8,)}</a></h5>
                    <h5><i className="fas fa-desktop"></i><a href={portfolioLink} target="_blank">{portfolioLink.slice(9,)}</a></h5>
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
