import React from 'react'
import './ApplicationItem.css'

function ApplicationItem() {
    return (
        <>
         <div className="job-app">
    
            <span className = 'date'> Sept 9</span>
            <span className = 'company-name'> Google</span>
            <span className = 'position'>Jr. Developer</span>
            <span className = 'marker'><div className='circle'/></span>
      
         </div>      
        </>
    )
}

export default ApplicationItem
