import React, { useState } from 'react'
import './TrackerTable.css'
function TrackerTable() {

    let [filter, handleFilter] = useState('all')
    let filters = [
        {name: 'All', value:'all'},
        {name: 'Application Submitted', value: 'appSub'},
        {name: 'Interview', value: 'interview'},
        {name: 'Offer',value:'offer'},
        {name: 'Rejected', value:'rejected'}    
    ]

    return (
        <>
            <section className="application-board">
                <div className='table-title'>
                <h1>My Job Applications</h1>
                </div>

            </section>
        </>
    )
}

export default TrackerTable
