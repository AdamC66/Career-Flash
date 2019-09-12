import React from 'react'
import './ApplicationItem.css'
import placeholder from '../../img/placeholderimg.png'
function ApplicationItem({date, companyName, position}) {
    return (
        <>
         <div className="job-app">
    
            <span className = 'date'> {date} </span>
            <span className="company-logo"><img className='company-logo-img' src={`//logo.clearbit.com/${companyName}.com?size=60`} onError={(e)=>{e.target.onerror = null; e.target.src=placeholder}} alt=""></img></span>
            <span className = 'company-name'> {companyName} </span>
            <span className = 'position'> {position} </span>
            <span className = 'marker'><div className='circle'/></span>
      
         </div>      
        </>
    )
}

export default ApplicationItem
