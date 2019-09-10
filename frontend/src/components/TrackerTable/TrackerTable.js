import React from 'react'
import './TrackerTable.css'
import ApplicationItem from '../ApplicationItem/ApplicationItem'

function TrackerTable({ applications }) {
    let applicationstest=[
        {date:'Sept 2',
        company: 'Google',
        position: 'Front End Dev'},
        {date:'Sept 4',
        company: 'Reddit',
        position: 'Full Stack Dev'},
    ]
    const appElements = applicationstest.map((application, i)=><ApplicationItem key={i} id={i} date={application.date} companyName={application.company} position={application.position}/>)
    return (
        <>
            <section className="application-board">
                <div className='table-title'>
                <h1>My Job Applications</h1>
                </div>
                { appElements }
            </section>
        </>
    )
}

export default TrackerTable
