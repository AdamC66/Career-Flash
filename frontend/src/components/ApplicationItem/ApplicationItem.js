import React, { useState } from 'react'
import './ApplicationItem.css'
import placeholder from '../../img/placeholderimg.png'
import EditApplicationModal from "../EditApplicationModal/EditApplicationModal"

function ApplicationItem({ application, handleFieldChange, myindex, handleUpdateApp}) {
    const statusToColor={
        "Application Submitted": 'yellow',
        Interview: 'orange',
        Offer: 'green',
        Rejected: 'red'
    }
    const [editModalOpen, setEditModalOpen] = useState(false)
    console.log(application)
    return (
        <>
        <EditApplicationModal application={application} index={myindex} setEditModalOpen={setEditModalOpen} editModalOpen={editModalOpen} handleUpdateApp={handleUpdateApp}/>
        <div >
        
         <div className="job-app" >
            <span className = 'date' onClick={()=>setEditModalOpen(true)}><h4> {(application.date_submitted).substring(0,10)} </h4></span>
            <span className="company-logo" onClick={()=>setEditModalOpen(true)}><img className='company-logo-img' src={`//logo.clearbit.com/${application.company}.com?size=60`} onError={(e)=>{e.target.onerror = null; e.target.src=placeholder}} alt=""></img></span>
            <span className = 'company-name' onClick={()=>setEditModalOpen(true)}> {application.company} </span>
            <span className = 'position' onClick={()=>setEditModalOpen(true)}> {application.position} </span>
            
            <div className="form-group">
                <select className="form-control" id="Select1" value={application.status} onChange={handleFieldChange(myindex)}>
                    <option id="ApplicationSubmitted">Application Submitted</option>
                    <option id="Interview">Interview</option>
                    <option id="Offer">Offer</option>
                    <option id="Rejected">Rejected</option>
                </select>
            </div>
            <span className = 'marker'><div className='circle' style = {{background: statusToColor[application.status]}}/></span>
      
         </div>
 
        </div>
        </>
        
    )
}

export default ApplicationItem
