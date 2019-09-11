import React, {useState} from 'react'
import './NewAppModal.css'
import Modal from 'react-modal';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function NewAppModal({setModalOpen, modalOpen}) {
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [contactName, setContactName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactPhone, setContactPhone] = useState('')
const submitValue = () => {
    const frmdetails = {
        'companyName' : companyName,
        'position' : position,
        'description' : description,
        'date' : date,
        'contactName' : contactName,
        'contactEmail': contactEmail,
        'contactPhone': contactPhone,
    }
    console.log(frmdetails);
}

const handleTogglePage= (event) =>{
    let info = document.querySelector('#infoitems')
    let notes = document.querySelector('.notes')
    info.classList.toggle('hidden')
    notes.classList.toggle('hidden')
}

return(
    <Modal
        isOpen={modalOpen}
        contentLabel="Example Modal"
        className='newAppModal'>
        
    <button className='modal-close info' onClick={()=>setModalOpen(false)}>X</button>
    <h1>New Application</h1>
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
        <img src={`//logo.clearbit.com/${companyName}.com?size=80`} alt="logo"></img>
    </div>
    <h2>Company Name</h2>    
    <input type="text" name="company-name" placeholder="Company Name" onChange={e => setCompanyName(e.target.value)} />

    <h2>Position</h2>
    <input type="text" name='position'  placeholder="Position" onChange={e => setPosition(e.target.value)} />
    <h2>Description</h2>
    <textarea name='description' placeholder="Description" onChange={e => setDescription(e.target.value)}> </textarea>
 
    <h2>Date</h2>
    <DatePicker
    
        selected={date}
        onChange={(date)=> setDate(date)}
    />

    </div>
    <div className='notes hidden'>
    <h2> Notes</h2>
    <textarea name='description info' placeholder="Description" onChange={e => setDescription(e.target.value)}> </textarea>
    
    <h2>Contact</h2>
    <input type="text" name='contact-name'  placeholder="Name" onChange={e => setContactName(e.target.value)} />
    <input type="text" name='contact-email'  placeholder="Email" onChange={e => setContactEmail(e.target.value)} />
    <input type="text" name='contact-phone'  placeholder="Phone" onChange={e => setContactPhone(e.target.value)} />
    </div>

    <button className='btn-modal-newapp' onClick={submitValue}>Submit</button>

    </Modal>
    )
}
export default NewAppModal