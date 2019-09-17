import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Contact()  {
    const[name, setName] = useState ('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');
    
    const handleSubmit = (event) => {
        let rand = Math.floor(Math.random() * 10)
        console.log(rand)
            switch (rand){
                case 0: 
                alert('Woops! Something went wrong, please try again!')
                break
                case 1: 
                alert("Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.")
                break
                case 2: 
                alert("Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.")
                break
                case 3: 
                alert("My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?")
                break
                case 4: 
                alert("Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ")
                break
                case 5: 
                alert("Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.")
                break
                case 6: 
                alert("Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.")
                break
                case 7: 
                alert("Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.")
                break
                case 8: 
                alert("Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?")
                break
                case 9: 
                alert("What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.")
                break
                default: alert('Thank you come again!')
            }
            setName('')
            setEmail('')
            setMessage('')
            event.preventDefault();
    }
    
        
        
        return(
            <div className='card text-white bg-secondary mb-3' style={{width: "80%", margin:"0 auto", textAlign:"center"}}>
                <h1>Contact Us</h1>
                <form className='card bg-primary mb-3' style={{width: "80%", margin:"0 auto"}} onSubmit = {handleSubmit}>
                    <br/>
                    <label htmlFor='name'><b><FontAwesomeIcon icon={faEnvelope} color="white"/>Name: </b>
                    <input type='text' className="form-control" style={{width: "60%", margin:"0 auto"}} value={name} placeholder = 'Name' name='name' onChange = {(e)=> setName(e.target.value)}required/>
                    </label>
                    <br/>
                    <label htmlFor='email'><b><FontAwesomeIcon icon={faEnvelope} color="white"/>Email: </b>
                    <input type='text' className="form-control" style={{width: "60%", margin:"0 auto"}} value={email} placeholder = 'Email' name='email' onChange = {(e)=> setEmail(e.target.value)}required/>
                    </label>
                    <br/>
                    <label htmlFor='message'><b><FontAwesomeIcon icon={faEnvelope} color="white"/>Message: </b>
                    <textarea name='message' className="form-control" style={{width: "60%", margin:"0 auto"}} value={message} placeholder="Message" onChange={e => setMessage(e.target.value)}> </textarea>
                    <br/>
                    <input className="btn btn-secondary" style={{width: "60%", margin:"20px auto"}}  type='submit' value='Submit'/>
                    </label>
                </form>
            </div>
        )
    }

export default Contact;
