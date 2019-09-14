import React, {useState} from 'react'
import './EditModal.css'
import Modal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css";
import placeholder from '../../img/placeholderimg.png'

function EditModal({modalOpen, setModalOpen, setUserProfilePic, setUserBrandStatement, setGithubLink, setLinkedinLink, setPortfolioLink,
    userProfilePic, userBrandStatement, githubLink, linkedinLink, portfolioLink
}) {

    const submitValue = () => {
        const frmdetails = {
            setUserProfilePic, setUserBrandStatement, setGithubLink, setLinkedinLink, setPortfolioLink
        }
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
            <div class="card-header">
            <h1 className="card-title">Edit Profile</h1>
            </div>

        <div class="card-body">
                <div className='profile-pic-wrapper-small'>
                    <img className='profile-pic' src={userProfilePic} alt=""/>
                    <input className="profileupload" type='file'/>
                </div>
            <h4>Brand Statement</h4>
            <textarea className='brand-statement-area' id="test" value={userBrandStatement} name="brandStatement" onChange={(e)=>setUserBrandStatement(e.target.value)}></textarea>
            <h4>Resume</h4>
            <input type='file'/>
            <h4>Cover Letter</h4>
            <input type='file'/>
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
