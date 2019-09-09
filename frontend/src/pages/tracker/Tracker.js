import React, { useState } from 'react'
import './tracker.css'
import TrackerTable from '../../components/TrackerTable/TrackerTable'

function Tracker() {
    let [filter, handleFilter] = useState('all')
    let filters = [
        {name: 'All', value:'all'},
        {name: 'Application Submitted', value: 'appSub'},
        {name: 'Interview', value: 'interview'},
        {name: 'Offer',value:'offer'},
        {name: 'Rejected', value:'rejected'}    
    ]


    return (
        <div>
            <TrackerTable />
        </div>
    )
}

export default Tracker
