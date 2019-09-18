import React from 'react'
import UserCard from './UserCard'


function UserCards({users}) {
    console.log('__IM IN USERCARD', users)
    let userCards = users.map((user, i)=><UserCard user={user} key={i} id={i}/>)
               
    return (
        <div style={{overflowY: 'scroll', height: '800px'}}>
            {userCards}
        </div>
    )
}

export default UserCards

