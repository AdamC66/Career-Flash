import React, { useState } from 'react'
import './tracker.css'
import TrackerTable from '../../components/TrackerTable/TrackerTable'
import NewAppModal from '../../components/NewAppModal/NewAppModal'

function Tracker() {
    const [applications, setApplications] = useState('')
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div>
            <TrackerTable applications={applications} setModalOpen={setModalOpen}/>
            
            <NewAppModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </div>
    )
}

export default Tracker
