import React, { useState } from 'react'
import './tracker.css'
import TrackerTable from '../../components/TrackerTable/TrackerTable'
import NewAppModal from '../../components/NewAppModal/NewAppModal'

function Tracker() {
    const [modalOpen, setModalOpen] = useState(false)

    const checkLogin = () => {
        if (window.localStorage['token'] === 'null') {
            alert('You are not logged in, please login to view the page');
            window.location.href = '/login'
        }
    }

    window.addEventListener('load', checkLogin)
    
    return (
        <div>
            <TrackerTable setModalOpen={setModalOpen}/>
            
            <NewAppModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </div>
    )
}

export default Tracker
