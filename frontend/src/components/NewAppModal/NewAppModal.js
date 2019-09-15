import React, {useState} from 'react'
import './NewAppModal.css'
import Modal from 'react-modal';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import placeholder from '../../img/placeholderimg.png'
import main_url from '../../config.js'

function NewAppModal({setModalOpen, modalOpen}) {
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [contactName, setContactName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactPhone, setContactPhone] = useState('')

const submitValue = () => {
    const frmdetails = {
        'company' : companyName,
        'position' : position,
        'description' : description,
        'date_submitted' : date,
        'notes': notes,
        'contact_name' : contactName,
        'contact_email': contactEmail,
        'contact_phone': contactPhone,
        'status': 'appsub'
    }
    console.log(frmdetails);
    handleSubmit(frmdetails)
}

const handleTogglePage= (event) =>{
    let info = document.querySelector('#infoitems')
    let notes = document.querySelector('.notes')
    info.classList.toggle('hidden')
    notes.classList.toggle('hidden')
}

const handleSubmit = (frmdetails)=>{
    let userToken = window.localStorage['token']
    console.log(userToken)
    main_url.post("/api/applications/",
        frmdetails,{
        headers: {
            Authorization: `Token ${userToken}`,
            'Content-Type' : 'application/json' 
        }
        
    })
}

return(
    <Modal
        isOpen={modalOpen}
        contentLabel="Example Modal"
        className='newAppModal'>
    <div className="card text-white bg-dark mb-3">    
    <button className='modal-close info' onClick={()=>setModalOpen(false)}>X</button>
    <div class="card-header">
    <h1 className="card-title">New Application</h1>
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
        <img src={`//logo.clearbit.com/${companyName}.com?size=80`} onError={(e)=>{e.target.onerror = null; e.target.src=placeholder}} alt=""></img>
    </div>
    <h4 className="card-title">Company Name</h4>    
    <input type="text" name="company-name" placeholder="Company Name" onChange={e => setCompanyName(e.target.value)} />

    <h4 className="card-title">Position</h4>
    <input type="text" name='position'  placeholder="Position" onChange={e => setPosition(e.target.value)} />
    <h4 className="card-title">Description</h4>
    <textarea name='description' placeholder="Description" onChange={e => setDescription(e.target.value)}> </textarea>
 
    <h4 className="card-title">Date</h4>
    <DatePicker
    
        selected={date}
        onChange={(date)=> setDate(date)}
    />

    </div>
    <div className='notes hidden'>
    <h4 className="card-title"> Notes</h4>
    <textarea name='description info' placeholder="Notes" onChange={e => setNotes(e.target.value)}> </textarea>
    
    <h4 className="card-title">Contact</h4>
    <input type="text" name='contact-name'  placeholder="Name" onChange={e => setContactName(e.target.value)} />
    <input type="text" name='contact-email'  placeholder="Email" onChange={e => setContactEmail(e.target.value)} />
    <input type="text" name='contact-phone'  placeholder="Phone" onChange={e => setContactPhone(e.target.value)} />
    </div>

    <button className='btn-modal-newapp' onClick={submitValue}>Submit</button>
    </div>
    </div>
    </Modal>
    )
}
export default NewAppModal