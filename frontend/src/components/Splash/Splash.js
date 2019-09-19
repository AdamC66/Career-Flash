import React, {useState} from 'react'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'
import img9 from './img/9.jpg'
import img10 from './img/10.jpg'
import img11 from './img/11.jpg'
import "./splash.css"
import { Link } from 'react-router-dom';
function Splash() {
    const [loggedInLinks, setLoggedInLinks] = useState(
    <>
        <Link to = '/join'>
            <button className="btn btn-primary" value="join" style={{marginRight: '5px'}}>Join Now</button>
        </Link>
        <Link to = '/login'>
            <button className="btn btn-primary" value="login" style={{marginLeft: '5px'}}>Login</button>
        </Link>
    </>);
    const [image, setImage] = useState(0)
    const [selectedpic, setSelectedPic] = useState(img1)

    const checkLogin = () => {
        if (window.localStorage['token'] !== 'null'){
            setLoggedInLinks(
                <Link to = '/dashboard'>
                    <button className="btn btn-primary" value="join" style={{marginRight: '5px'}}>Dashboard</button>
                </Link>
            )
        } 
    }

    const changepic = () => {
        setImage(image+1)
        switch(image){
            case 1:
                setSelectedPic(img1)
                break;
            case 2:
                setSelectedPic(img10)
                break;
            case 3:
                setSelectedPic(img3)
                break;
            case 4: 
                setSelectedPic(img11)
                break;
            case 5:
                setSelectedPic(img5)
                break;
            case 6:
                setSelectedPic(img6)
                break;
            case 7:
                setSelectedPic(img9)
                break;
            case 8:
                setSelectedPic(img8)
                break;
            case 9: 
                setSelectedPic(img7)
                break;
            case 10:
                setSelectedPic(img2)
                break;
            case 11:
                setImage(0)
                setSelectedPic(img4)
                break;
                
        }
    }
    window.addEventListener('load', checkLogin)

    setTimeout(() => {
        changepic()
    }, 5000);

    return (
        <div>
            <div className = 'splashimg'>
                <div className='about'>
                <h1>Welcome to Career Flash</h1>
                <h4>Your Job Search Control Center</h4>
                {loggedInLinks}
                </div>
                <img src={selectedpic} alt=""/>
            </div>
        </div>
    )
}

export default Splash
