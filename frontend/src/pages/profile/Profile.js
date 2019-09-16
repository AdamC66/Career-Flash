import React, { useState } from 'react'
import './profile.css'
import MyDocument from '../../components/MyDocument/MyDocument';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import EditModal from '../../components/EditModal/EditModal';
import main_url from '../../config';


function Profile() {
    const [userName, setUserName] = useState('John Cena')
    const [userProfilePic, setUserProfilePic] = useState('https://statics.sportskeeda.com/editor/2018/08/bd960-1534053592-800.jpg')
    const [userBrandStatement, setUserBrandStatement] = useState("You cant see me")
    const [githubLink, setGithubLink] = useState("https://github.com")
    const [linkedinLink, setLinkedinLink] = useState("https://linkedin.com")
    const [portfolioLink, setPortfolioLink] = useState("")
    const [modalOpen, setModalOpen] = useState('')

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
                setUserBrandStatement(res.data[0].brand_statement);
                setGithubLink(res.data[0].github);
                setLinkedinLink(res.data[0].linkedin);
                setPortfolioLink(res.data[0].portfolio);
                console.log(res.data)
                // setLoginOutButton(<h5><a className="dropdown-item" href="/" onClick={handleLogOut}>Logout</a></h5>)
            });
            main_url.get('/api/users', {
                headers: {
                    Authorization: `Token ${userToken}` 
                }
            })
            .then(res => {
                setUserName(res.data[0].username)
            })
        }
    }

    const givePDF = () => {
       const userToken = window.localStorage['token']
        if(userToken !== 'null'){
            main_url.get('/api/profiles/', {
                headers: {
                    Authorization: `Token ${userToken}` 
                }
            })
            .then(res => {
                console.log(res.data)
                
            });
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
            <button onClick={givePDF}>Test</button>
        </div>
        
    )
}

export default Profile
