import React from 'react'
import UserCard from './UserCard'


function UserCards({userProfile}) {
    
    
    return (
        <div>
            <UserCard userProfile={userProfile}/>
            <UserCard userProfile={userProfile}/>
            <UserCard userProfile={userProfile}/>
            <UserCard userProfile={userProfile}/>
        </div>
    )
}

export default UserCards
