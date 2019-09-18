import React, {useState} from 'react'
import './NewGroupModal.css'
import Modal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css";
import main_url from '../../config';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';

function NewGroupModal({modalOpen, setModalOpen, setGroups}) 
{
    const [groupName, setGroupName] = useState('')
    const [groupPic, setGroupPic] = useState('')
    const submitValue = () => {


        const Orginization = {
            groupName: groupName,
        }
    }

    return (
    <Modal
        isOpen={modalOpen}
        contentLabel="Example Modal"
        className='editmodal'>
        <div className="card text-white bg-dark mb-3">
            <button className='modal-close info' onClick={()=>setModalOpen(false)}>X</button>  
            <div className="card-header">
            <h1 className="card-title">Create New Group</h1>
            </div>

        <div class="card-body">
                <div className='profile-pic-wrapper-small'>
                    <img className='profile-pic' src={groupPic} alt=""/>
                    <input className="profileupload" type='file'/>
                </div>
            <h4>Group Name</h4>
            <input type='text' value={groupName} name="groupName" onChange={(e)=>setGroupName(e.target.value)}/>
            <p>Please Contact IT to add users to your group</p>
        </div>

        </div>
    </Modal>
    )
}

export default NewGroupModal
