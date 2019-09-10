import React from 'react'
import './TrackerTable.css'
import ApplicationItem from '../ApplicationItem/ApplicationItem'

function TrackerTable({ applications }) {
    applications.map((application, i)=><ApplicationItem key={i} id={i} date={application.date} companyName={application.company} position={application.position}/>)
    return (
        <>
            <section className="application-board">
                <div className='table-title'>
                <h1>My Job Applications</h1>
                </div>
                <ApplicationItem />
                <ApplicationItem />
                <ApplicationItem />
                <ApplicationItem />
                <ApplicationItem />
                <ApplicationItem />
            </section>
        </>
    )
}

export default TrackerTable
