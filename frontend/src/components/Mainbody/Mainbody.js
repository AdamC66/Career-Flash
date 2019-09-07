import React, { useState } from 'react'
import axios from 'axios';

function Mainbody() {
    const [data, setData] = useState("loading")


    const GET_VERB = () => {
        axios.get("/api/it/", {})
          .then((response) => {
              console.log("__GET VERB CALLED")
              setData(response.data.it)
              console.log(data)
            }).catch((e) => console.log("Error:", e))
        }
    GET_VERB()
    console.log("__AFTER GET VERB IS CALLED",data)
    return (
        
        <div>
            <h1>THIS IS A TEST</h1>
            <h3>{data}</h3>
        </div>
    )

}

export default Mainbody
