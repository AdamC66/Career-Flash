import React, { useState, useEffect } from 'react'
import UserCards from '../../components/UserCards/UserCards'
import GroupCard from '../../components/GroupCard/GroupCard'
import './dashboard.css'
import main_url from '../../config';

function Dashboard() {
    const userProfilePic = "https://www.thesun.co.uk/wp-content/uploads/2018/10/NINTCHDBPICT0004443600951.jpg"
    const [groups, setGroups] = useState([])
    const [users, setUsers] = useState([])
    const [activeGroup, setActiveGroup] = useState(1)
    
    useEffect(() => {
        getGroups()
        getUsers()
    }, [])
    const updateTable = (id)=> {
        
        setActiveGroup(id)
        getUsers()
    }        
    const getGroups = () =>{
        let userToken = window.localStorage['token']
        main_url.get('/api/groups', {
            headers: {
                Authorization: `Token ${userToken}` 
            }
        })
        .then(res => {
            setGroups(res.data)
            setActiveGroup(res.data[0].id)
            console.log(res.data)
            console.log(groups)
            
        })
    }
    const getUsers = () =>{
        let userToken = window.localStorage['token']
        main_url.get(`/api/groupusers?group_id=${activeGroup}`, {
            headers: {
                Authorization: `Token ${userToken}` 
            }
        })
        .then(res => {
            // console.log("__IM IN DASHBOARD", res.data)
            setUsers(res.data)
            // console.log(users)
        })
    }

    let groupCards = groups.map((group, i)=><GroupCard key={i} id={i} updateTable={updateTable} group={group}/>)
    let userCards = <UserCards users={users}/>

    const TestUserData = {
        brandStatement: true,
        github: "",
        linkedin: true,
        portfolio: true,
        resume: false,
        cover_letter: true
    }
    
    return (

        <div className="dashboard-main">
            <div className="card text-white bg-dark mb-3">
                <div className='profile-pic-wrapper'>
                <img className='profile-pic' src={userProfilePic} alt=""/>
                </div>
                <h4>My Groups</h4>
                { groupCards }
            </div>
            <section className="card bg-secondary mb-3">

            { userCards }
            
            </section>
        </div>
    )
}

export default Dashboard
