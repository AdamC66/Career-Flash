import React from 'react'
import './TrackerTable.css'
import ApplicationItem from '../ApplicationItem/ApplicationItem'
function TrackerTable() {
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
