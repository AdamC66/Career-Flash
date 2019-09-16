import React, { useState } from 'react'
import './ApplicationItem.css'
import placeholder from '../../img/placeholderimg.png'

function ApplicationItem({date, companyName, position, status}) {
    // const [companyName, setCompanyName] = useState('');
    // const [position, setPosition] = useState('');
    // const [description, setDescription] = useState('');
    // const [date, setDate] = useState(new Date());
    // const [notes, setNotes] = useState('');
    // const [contactName, setContactName] = useState('')
    // const [contactEmail, setContactEmail] = useState('')
    // const [contactPhone, setContactPhone] = useState('')
    const statusToColor={
        appSub: 'yellow',
        interview: 'orange',
        offer: 'green',
        rejected: 'red'
    }
    const handleCircleColor = (x)=>{
        switch(x){
            case 'appsub':
                return ('yellow')
            case 'interview':
                return ('orange')
            case 'offer':
                return ('green')
            case 'rejected':
                return ('red')
            default:
                return('blue')
        }
    }

    return (
        <>
         <div className="job-app">
            <span className = 'date'><h4> {date} </h4></span>
            <span className="company-logo"><img className='company-logo-img' src={`//logo.clearbit.com/${companyName}.com?size=60`} onError={(e)=>{e.target.onerror = null; e.target.src=placeholder}} alt=""></img></span>
            <span className = 'company-name'> {companyName} </span>
            <span className = 'position'> {position} </span>
            <span className = 'position'> {status} </span>
            <span className = 'marker'><div className='circle' style = {{background: statusToColor[status]}}/></span>
      
         </div>      
        </>
    )
}

export default ApplicationItem
