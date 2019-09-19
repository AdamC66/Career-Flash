import React from 'react'
import splash from './img/splash.jpg'
import "./about.css"
function About() {
    return (
        <div>
            <div className = 'aboutimg'>
                <div className='about'>
                <h1 style={{color: "white", textShadow: "0px 0px 8px black"}}>Our Story</h1>
                <p style={{color: "white", textShadow: "0px 0px 8px black"}}>CareerFlash's goal is to be the homebase for your job hunt. From experience we understand how arduous a task looking for a new job can be, and we wanted to simplify the process as much as possible. Our core tools provides you a sleek and user friendly interface, to keep track of all your applications in one spot and filter them based on the status. Another key feature is our document upload page, which will hold versions of your resume and cover letter.</p>
                <br/>
                <p style={{color: "white", textShadow: "0px 0px 8px black"}}>
                For Organizations, we equip you with a dashboard to view all your associated users and keep track of their job hunting progresss. Organization admins can also leave comments on user resume's and cover letter's that support a synergistic experience between everyone. </p>
                </div>
                <img className="backimg" src={splash} alt=""/>       
            </div>
        </div>
    )
}

export default About;