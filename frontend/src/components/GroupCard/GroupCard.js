import React from 'react'

function GroupCard({ group, updateTable}) {
    return (
        <button onClick={()=>{updateTable(group.id)}} className="btn btn-primary" style={{margin: '5px'}}>
            Group name <br/>
            {group.name}
        </button>
    )
}

export default GroupCard
