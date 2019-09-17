import React, { useState, useEffect } from 'react'
import './TrackerTable.css'
import ApplicationItem from '../ApplicationItem/ApplicationItem'
import Filter from '../Filter/Filter'
import main_url from '../../config.js'


function TrackerTable({ setModalOpen }) {

    const [myFilter, setFilter] = useState('all');
    const [applications, setApplications] = useState(
        [
        {date_submitted:'Sept 2',
        companyName: 'Google',
        position: 'Front End Dev',
        status: 'Application Submitted'},
        {date_submitted:'Sept 4',
        companyName: 'Reddit',
        position: 'Full Stack Dev',
        status: 'Application Submitted'},
        {date_submitted:'Aug 30',
        companyName: 'GAdventures',
        position: 'API Dev',
        status: 'Offer'},
        {date_submitted:'Sept 6',
        companyName: 'PagerDuty',
        position: 'Mobile Dev',
        status: 'Interview'},
        {date_submitted:'Sept 9',
        companyName: 'some company',
        position: 'Mobile Dev',
        status: 'Interview'},
    ])

    let filters = [
        {name: 'All', value:'all'},
        {name: 'Application Submitted', value: 'Application Submitted'},
        {name: 'Interview', value: 'Interview'},
        {name: 'Offer',value:'Offer'},
        {name: 'Rejected', value:'Rejected'}    
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


    ///I KNOW CREATING A NEW ARRAY AND RESETTING THE WHOLE STATE ISNT THE BEST WAY
    // TO DO THIS BUT THIS WORKS FOR NOW AND I CANT COME UP WITH THE BETTER OPTION AT THIS POINT
    const handleFieldChange = (index) => e => {
        console.log('__HANDLE FIELD CHANGE -- index', index);
        let newarr= [...applications]
        console.log("__NEW ARR__", newarr)
        console.log(newarr[index])
        newarr[index].status = e.target.value
        setApplications(newarr)
    }

    const handleUpdateApp = (frmdetails, index) =>{
        let newarr= [...applications]
        newarr[index] = frmdetails
        setApplications(newarr)
    }
    

    const filterApps = () =>{
        let appElements = null
        if(myFilter !== "all"){
            let filteredapps = applications.filter(application => application.status===myFilter)
            appElements = filteredapps.map((application, i)=><ApplicationItem key={i} id={i} handleUpdateApp={handleUpdateApp} myindex={applications.indexOf(application)} application={application} handleFieldChange={handleFieldChange}/>)
        }else{
            appElements = applications.map((application, i)=><ApplicationItem key={i} id={i} handleUpdateApp={handleUpdateApp} myindex={i} application={application} handleFieldChange={handleFieldChange}/>)
        }
        return appElements
        }

    return (
        <>
            
            <section className="application-board">
                <div className='table-title'>
                <div className="card-header"><h1>My Job Applications</h1></div>
                </div>
                <Filter filters={ filters } setFilter={ setFilter }/>
                <button id="newapp" className="btn btn-primary" onClick={()=>setModalOpen(true)}> Add Application </button>
                { filterApps() }
            </section>
        </>
    )
}

export default TrackerTable
