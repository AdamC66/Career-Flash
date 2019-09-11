import React, { useState } from 'react'
import './TrackerTable.css'
import ApplicationItem from '../ApplicationItem/ApplicationItem'
import Filter from '../Filter/Filter'

function TrackerTable({ applications }) {
    
    const [myfilter, setFilter] = useState('all');

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

    const appElements = applicationstest.map((application, i)=><ApplicationItem key={i} id={i} date={application.date} companyName={application.company} position={application.position}/>)
    return (
        <>
            <section className="application-board">
                <div className='table-title'>
                <h1>My Job Applications</h1>
                <h2>{myfilter}</h2>
                </div>
                <Filter filters={ filters } setFilter={ setFilter }/>
                { appElements }
            </section>
        </>
    )
}

export default TrackerTable
