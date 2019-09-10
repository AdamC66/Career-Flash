import React, { useState } from 'react'
import './tracker.css'
import TrackerTable from '../../components/TrackerTable/TrackerTable'
import axios from 'axios';


function Tracker() {
    const [applications, setApplications] = useState('')

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
            <TrackerTable applications={applications}/>
        </div>
    )
}

export default Tracker
