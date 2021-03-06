import React, {useState} from 'react'
import '../NewAppModal/NewAppModal.css'
import Modal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css";
import placeholder from '../../img/placeholderimg.png'
import main_url from '../../config';

function EditApplicationModal({application,index, handleUpdateApp, setEditModalOpen, editModalOpen}) {
    const [applicationdata, setApplicationData] = useState(application)

    const submitValue = () => {
        const frmdetails = {
            'company' : applicationdata.company,
            'position' : applicationdata.position,
            'description' : applicationdata.description,
            'date_submitted' : applicationdata.date_submitted,
            'notes': applicationdata.notes,
            'contact_name' : applicationdata.contact_name,
            'contact_email': applicationdata.contact_email,
            'contact_phone': applicationdata.contact_phone,
            'status': applicationdata.status,
            'id': application.id
        }

        handleSubmit(frmdetails)
    }

    const handleTogglePage= (event) =>{
        let info = document.querySelector('#infoitems')
        let notes = document.querySelector('.notes')
        info.classList.toggle('hidden')
        notes.classList.toggle('hidden')
    }

    const handleSubmit = (frmdetails)=>{
        handleUpdateApp(frmdetails, index) 
        main_url.put(`/api/applications/${applicationdata.id}/`, frmdetails, {
            headers: {
                Authorization: `Token ${window.localStorage["token"]}`
            }
        });
        setEditModalOpen(false)
    }

    return(
        <Modal
            isOpen={editModalOpen}
            contentLabel="Edit Application Modal"
            className='newAppModal'>
        <div className="card text-white bg-dark mb-3" style={{overflowY: 'scroll', height: '600px', width: '500px'}}>    
        <button className='modal-close info' onClick={()=>setEditModalOpen(false)}>X</button>
        <div class="card-header">
        <h1 className="card-title">Edit Application</h1>
        </div>
        <div class="card-body">
        <ul className='filters'>
        <li>
            <input type="radio" name="category" className="filter-selector"  id='info'/>
            <label htmlFor='info' onClick={ (event)=>handleTogglePage(event)} defaultChecked={true}>Info</label>
        </li>
        <li>
            <input type="radio" name="category" className="filter-selector"  id='notes'/>
            <label htmlFor='notes' onClick={ (event)=>handleTogglePage(event)}>Notes</label>
        </li>
        </ul>   

        <div className="info" id='infoitems'>
        <div className='company-logo-modal '>
            <img src={`//logo.clearbit.com/${applicationdata.company}.com?size=80`} onError={(e)=>{e.target.onerror = null; e.target.src=placeholder}} alt=""></img>
        </div>
        <h4 class="card-title">Company Name</h4>    
        <input type="text" name="company-name" defaultValue={applicationdata.company} onChange={e => setApplicationData({...application, company: e.target.value})} />

        <h4 className="card-title">Position</h4>
        <input type="text" name='position'  defaultValue={applicationdata.position} onChange={e => setApplicationData({...application, position: e.target.value})} />
        <h4 className="card-title">Description</h4>
        <textarea name='description' defaultValue={applicationdata.description} onChange={e => setApplicationData({...application, description: e.target.value})}/>


        </div>
        <div className='notes hidden'>
        <h4 className="card-title"> Notes</h4>
        <textarea name='description info' defaultValue={applicationdata.notes} onChange={e => setApplicationData({...application, notes: e.target.value})}/>
        
        <h4 className="card-title">Contact</h4>
        <input type="text" name='contact-name'  placeholder="Name" defaultValue={applicationdata.contact_name} onChange={e => setApplicationData({...application, contact_name: e.target.value})} />
        <input type="text" name='contact-email'  placeholder="Email" defaultValue={applicationdata.contact_email} defaultValue={applicationdata.company_name} onChange={e => setApplicationData({...application, contact_email: e.target.value})} />
        <input type="text" name='contact-phone'  placeholder="Phone" defaultValue={applicationdata.contact_phone} onChange={e => setApplicationData({...application, contact_phone: e.target.value})} />
        </div>

        <button className='btn-modal-newapp' onClick={submitValue}>Submit</button>
        </div>
        </div>
        </Modal>
        )
}
export default EditApplicationModal