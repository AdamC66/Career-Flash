import React from 'react'
import UserCards from '../../components/UserCards/UserCards'
import './dashboard.css'

function Dashboard() {
    const userProfilePic = "https://www.thesun.co.uk/wp-content/uploads/2018/10/NINTCHDBPICT0004443600951.jpg"
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
                <h4>Group Name</h4>
            </div>
            <section className="card bg-secondary mb-3">

            <UserCards userProfile={TestUserData}/>
            
            </section>
        </div>
    )
}

export default Dashboard
