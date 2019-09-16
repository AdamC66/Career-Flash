import React from 'react'
import splash from './img/splash.jpg'
import "./splash.css"
function About() {
    return (
        <div>
            <div className = 'splashimg'>
                <div className='about'>
                <h1>Our Story</h1>
                <h5>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</h5>
                <br/>
                <h5>
                The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</h5>
                </div>
                <img src={splash} alt=""/>       
            </div>
        </div>
    )
}

export default About;