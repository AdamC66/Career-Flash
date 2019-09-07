import React from 'react'
import axios from 'axios';

function Mainbody() {

    let theresponse="hello"

    const GET_VERB = () => {
        axios.get("/api/it/", {})
          .then((response) => {
              console.log("__GET VERB CALLED")
              theresponse = response.data.it
              console.log(theresponse)
            }).catch((e) => console.log("Error:", e))
        }
    GET_VERB()
    console.log("__AFTER GET VERB IS CALLED",theresponse)
    return (
        
        <div>
            <h1>THIS IS A TEST</h1>
            <h3>{theresponse}</h3>
        </div>
    )

}

export default Mainbody
