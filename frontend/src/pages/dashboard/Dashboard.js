import React, { useState, useEffect } from 'react'
import UserCards from '../../components/UserCards/UserCards'
import GroupCard from '../../components/GroupCard/GroupCard'
import './dashboard.css'
import main_url from '../../config';
import NewGroupModal from '../../components/NewGroupModal/NewGroupModal'

function Dashboard() {
    const userProfilePic = "https://i.ytimg.com/vi/AHzw4QvE2Do/maxresdefault.jpg"
    const [groups, setGroups] = useState([])
    const [users, setUsers] = useState([])
    const [activeGroup, setActiveGroup] = useState(1)
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        getGroups()
        getUsers()
        updateTable(activeGroup)
    }, [])
    const updateTable = (id)=> {
        setActiveGroup(id)
        setUsers([])
        getUsers(id)
        userCards = <div/>
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
            console.log('GROUPS ARE:',groups)
            
        })
    }
    const getUsers = (id) =>{
        let userToken = window.localStorage['token']
        console.log(`__GETTING USERS FROM__ - /api/groupusers?group_id=${id}`)
        main_url.get(`/api/groupusers?group_id=${id}`, {
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
            <NewGroupModal setModalOpen={setModalOpen} modalOpen={modalOpen} setGroups={setGroups}/>
            <div className="card text-white bg-dark mb-3">
                <div className='profile-pic-wrapper'>
                <img className='profile-pic' src={userProfilePic} alt=""/>
                </div>
                <h4 class="card-title" style={{textAlign: 'center'}}>My Groups</h4>
                { groupCards }
                <button onClick={()=> setModalOpen(true)} className="btn btn-primary" style={{margin: '5px'}}> NewGroup </button>
            </div>
            <section style={{backgroundColor: 'rgba(170, 160, 170, 0.5)'}}>
            <div className="card text-white bg-dark mb-3">
            <h2 class="card-title" style={{textAlign: 'center'}}>Group Members </h2>
            </div>
            { userCards }
            
            </section>
        </div>
    )
}

export default Dashboard
