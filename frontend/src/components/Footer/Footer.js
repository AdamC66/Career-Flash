import React from 'react'
import './footer.css'
import teamLogo from '../../img/team-logo-2.png'

function Footer() {
    return (
        <footer className="footer">
            <div className='footerlogo-wrapper'><img src={teamLogo} alt=""/></div>
        </footer>
    )
}

export default Footer
