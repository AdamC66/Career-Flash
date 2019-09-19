import React, {useState, useEffect} from 'react'
import './EditModal.css'
import Modal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css";
import main_url from '../../config';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';

function EditModal({modalOpen, setModalOpen, setUserProfilePic, setUserBrandStatement, setGithubLink, setLinkedinLink, setPortfolioLink,
    userProfilePic, userBrandStatement, githubLink, linkedinLink, portfolioLink, userToken, userID, profileid
}) {
    const [resume, setResume] = useState()
    const [coverletter, setCoverletter] = useState()
    const submitValue = () => {
        const frmdetails = {
            setUserProfilePic, setUserBrandStatement, setGithubLink, setLinkedinLink, setPortfolioLink
        }

        const userProfile = {
            owner: userID,
            profile_picture: userProfilePic,
            brand_statement: userBrandStatement,
            github: githubLink,
            linkedin: linkedinLink,
            portfolio: portfolioLink,
        }
        console.log(userProfile.profile_picture)
        main_url.get('/api/profiles/', {
            headers: {
                Authorization: `Token ${userToken}`,
            }
        }).then(res => {
            console.log(res.data[0])
            if (!res.data[0]) {
                main_url.post('/api/profiles/', userProfile ,{
                    headers: {
                        Authorization: `Token ${userToken}`,
                    }
                });
            } else {
                main_url.put(`/api/profiles/${profileid}/`, userProfile ,{
                    headers: {
                        Authorization: `Token ${userToken}`,
            
                    }
                });
            };
        });
        console.log(frmdetails);
        setModalOpen(false)
    }
    return (
    <Modal
        isOpen={modalOpen}
        contentLabel="Example Modal"
        className='editmodal'>
        <div className="card text-white bg-dark mb-3">
            <button className='modal-close info' onClick={()=>setModalOpen(false)}>X</button>  
            <div className="card-header">
            <h1 className="card-title">Edit Profile</h1>
            </div>

        <div className="card-body" >
                <div className='profile-pic-wrapper-small'>
                    <img className='profile-pic' src={userProfilePic} alt=""/>
                </div>
            <p>Image URL:</p>
            <input className='profileupload' type='text' name="profilePic" onChange={(e)=>setUserProfilePic(e.target.value)}/>
            <h4>Brand Statement</h4>
            <textarea className='brand-statement-area' id="test" value={userBrandStatement} name="brandStatement" onChange={(e)=>setUserBrandStatement(e.target.value)}></textarea>
            <h4>Resume</h4>
            <input type='file' value={resume} onChange={(e)=>setResume(e.target.files[0])}/>
            <h4>Cover Letter</h4>
            <input type='file' value={coverletter} onChange={(e)=>setCoverletter(e.target.files[0])}/>/>
            <h4>GitHub</h4>
            <input type='text' value={githubLink} name="githubLink" onChange={(e)=>setGithubLink(e.target.value)}/>
            <h4>LinkedIn</h4>
            <input type='text' value={linkedinLink} name="linkedinLink" onChange={(e)=>setLinkedinLink(e.target.value)}/>
            <h4>Portfolio</h4>
            <input type='text' value={portfolioLink} name="portfolioLink" onChange={(e)=>setPortfolioLink(e.target.value)}/>
            <button className='btn-modal-newapp' onClick={submitValue}>Submit</button>
        </div>

        </div>
    </Modal>
    )
}

export default EditModal
