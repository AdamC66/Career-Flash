import React from 'react'
import UserCard from './UserCard'
import main_url from '../../config.js'

function UserCards({users}) {
    console.log('__IM IN USERCARDS THESE ARE MY USERS', users)
    const getProfile = (i) =>{        
        let userToken = window.localStorage['token']
        console.log("USERCARD LOOKING FOR PROFILE AT", `api/profiles?user_id=${i}`)

        main_url.get(`api/profiles?user_id=${i}`, {
        headers: {
            Authorization: `Token ${userToken}` 
        }
        }).then(res => {
            if (res.data[0]){
            console.log("USER PROFILE EXISTS FOR", users[i].first_name, '', users[i].last_name)
            console.log('Here it is!', res.data)
            return (res.data[0])
            }
        }).catch(e=>{
            console.log(e)
    
        })
        }

    let userCards = users.map((user, i)=><UserCard user={user} key={i} id={i} getProfile={getProfile}/>)
               
    return (
        <div style={{overflowY: 'scroll', height: '800px'}}>
            {userCards}
        </div>
    )
}

export default UserCards

