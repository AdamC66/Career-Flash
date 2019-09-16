import React, { useState, useEffect } from 'react'
import './TrackerTable.css'
import ApplicationItem from '../ApplicationItem/ApplicationItem'
import Filter from '../Filter/Filter'
import main_url from '../../config.js'
function TrackerTable({ setModalOpen }) {
    
    const [myFilter, setFilter] = useState('all');
    const [applications, setApplications] = useState([])
    let applicationstest=[
        {date_submitted:'Sept 2',
        company: 'Google',
        position: 'Front End Dev',
        status: 'appSub'},
        {date_submitted:'Sept 4',
        company: 'Reddit',
        position: 'Full Stack Dev',
        status: 'appSub'},
        {date_submitted:'Aug 30',
        company: 'GAdventures',
        position: 'API Dev',
        status: 'offer'},
        {date_submitted:'Sept 6',
        company: 'PagerDuty',
        position: 'Mobile Dev',
        status: 'interview'},
        {date_submitted:'Sept 9',
        company: 'some company',
        position: 'Mobile Dev',
        status: 'interview'},
    ]
    let filters = [
        {name: 'All', value:'all'},
        {name: 'Application Submitted', value: 'appSub'},
        {name: 'Interview', value: 'interview'},
        {name: 'Offer',value:'offer'},
        {name: 'Rejected', value:'rejected'}    
    ]
    useEffect((applications) => {
        let userToken = window.localStorage['token']
        main_url.get("/api/applications/",{
            headers: {
                Authorization: `Token ${userToken}` 
            }})
          .then((response) => {
              console.log("__GET APP CALLED")
              setApplications(response.data)
              console.log(applications)
            }).catch((e) => console.log("Error:", e))  
    }, [])

    const filterApps = () =>{
        let appElements = null
        if(myFilter !== "all"){
            let filteredapps = applicationstest.filter(application => application.status===myFilter)
            appElements = filteredapps.map((application, i)=><ApplicationItem key={i} id={i} date={application.date_submitted} companyName={application.company} position={application.position}/>)
        }else{
            appElements = applicationstest.map((application, i)=><ApplicationItem key={i} id={i} date={application.date_submitted} companyName={application.company} position={application.position}/>)
        }
        return appElements
        }
    
    return (
        <>
            <section className="application-board">
                <div className='table-title'>
                <div className="card-header"><h1>My Job Applications</h1></div>
                <h2>{myFilter}</h2>
                </div>
                <Filter filters={ filters } setFilter={ setFilter }/>
                <button id="newapp" className="btn btn-primary" onClick={()=>setModalOpen(true)}> Add Application </button>
                { filterApps() }
            </section>
        </>
    )
}

export default TrackerTable
