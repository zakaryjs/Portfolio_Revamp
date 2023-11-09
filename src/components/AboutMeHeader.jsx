import { useContext } from 'react'
import '../styles/AboutMeHeader.css'
import { useSpring, animated } from '@react-spring/web'
import { ColourContext } from '../contexts/ColourContext'



export default function AboutMeHeader() {

    const {colour} = useContext(ColourContext)

    const style = {color: colour}

    const mainFade = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        config: { duration: 2500 }
    })
    
    const subFade = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        config: { duration: 1000 },
        delay: 2500
    })



    return (
        <div id='aboutMeHeaderText'>
            <animated.div style={mainFade}>
                <h1 style={style} className='aboutMeHeader'>About Me</h1>
            </animated.div>
            <animated.div style={subFade}>
                <h3 style={style} className='aboutMeSubText'>Hi! My name is Zakary.</h3>
                <p style={style} className='aboutMeSubText'>I'm a tech enthusiast, gamer, and a keen learner.</p>
                <p style={style} className='aboutMeSubText'>I have always loved technology, and have always had an interest in computer programming.</p>
                <p style={style} className='aboutMeSubText'>In 2022, due to the rise in COVID cases in Western Australia I began to complete online school full time.</p>
                <p style={style} className='aboutMeSubText'>It was during this time that I began to think about my future career, and a reddit post which introduced me to Coder Academy.</p>
                <p style={style} className='aboutMeSubText'>I am nearing the end of the Bootcamp now, and I can confidently say that it was a truly awesome experience. I have learned so much!</p>
            </animated.div>
        </div>
    )
}