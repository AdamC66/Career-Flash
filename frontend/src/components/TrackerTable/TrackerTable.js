import React, { useState } from 'react'
import './TrackerTable.css'
import ApplicationItem from '../ApplicationItem/ApplicationItem'
import Filter from '../Filter/Filter'
import main_url from '../../config.js'
function TrackerTable({ setModalOpen }) {
    
    const [myfilter, setFilter] = useState('all');
    const [applications, setApplications] = useState({})
    let applicationstest=[
        {date:'Sept 2',
        company: 'Google',
        position: 'Front End Dev'},
        {date:'Sept 4',
        company: 'Reddit',
        position: 'Full Stack Dev'},
        {date:'Aug 30',
        company: 'GAdventures',
        position: 'API Dev'},
        {date:'Sept 6',
        company: 'PagerDuty',
        position: 'Mobile Dev'},
        {date:'Sept 9',
        company: 'some company',
        position: 'Mobile Dev'},
    ]
    let filters = [
        {name: 'All', value:'all'},
        {name: 'Application Submitted', value: 'appSub'},
        {name: 'Interview', value: 'interview'},
        {name: 'Offer',value:'offer'},
        {name: 'Rejected', value:'rejected'}    
    ]

    const GET_APPS = () => {
        main_url.get("/applications", {})
          .then((response) => {
              console.log("__GET APP CALLED")
              setApplications(response.data)
              console.log(applications)
            }).catch((e) => console.log("Error:", e))
        }
    GET_APPS()
    const appElements = applicationstest.map((application, i)=><ApplicationItem key={i} id={i} date={application.date} companyName={application.company} position={application.position}/>)
    return (
        <>
            <section className="application-board">
                <div className='table-title'>
                <div className="card-header"><h1>My Job Applications</h1></div>
                <h2>{myfilter}</h2>
                </div>
                <Filter filters={ filters } setFilter={ setFilter }/>
                <button id="newapp" className="btn btn-primary" onClick={()=>setModalOpen(true)}> Add Application </button>
                { appElements }
            </section>
        </>
    )
}

export default TrackerTable
