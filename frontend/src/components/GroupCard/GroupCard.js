import React from 'react'

function GroupCard({ group, updateTable, id}) {
    return (
        <button onClick={()=>{updateTable(id+1)}} className="btn btn-primary" style={{margin: '5px'}}>
            Group name <br/>
            {group.name}
        </button>
    )
}

export default GroupCard
