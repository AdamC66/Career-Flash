import React, { useState } from 'react'
import './tracker.css'
import TrackerTable from '../../components/TrackerTable/TrackerTable'
import axios from 'axios';
import NewAppModal from '../../components/NewAppModal/NewAppModal'

function Tracker() {
    const [applications, setApplications] = useState('')
    const [modalOpen, setModalOpen] = useState(false)

    const GET_APPS = () => {
        axios.get("/api/it/", {})
          .then((response) => {
              console.log("__GET APP CALLED")
              setApplications(response.data.it)
              console.log(applications)
            }).catch((e) => console.log("Error:", e))
        }

    return (
        <div>
        <button onClick={()=>setModalOpen(true)}> Open Modal </button>
            <TrackerTable applications={applications}/>
            
            <NewAppModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </div>
    )
}

export default Tracker
