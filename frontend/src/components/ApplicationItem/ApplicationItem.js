import React from 'react'
import './ApplicationItem.css'

function ApplicationItem({date, companyName, position}) {
    return (
        <>
         <div className="job-app">
    
            <span className = 'date'> {date} </span>
            <span className = 'company-name'> {companyName} </span>
            <span className = 'position'> {position} </span>
            <span className = 'marker'><div className='circle'/></span>
      
         </div>      
        </>
    )
}

export default ApplicationItem
