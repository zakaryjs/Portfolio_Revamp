import '../styles/ProjectsHeader.css'
import { useSpring, animated } from '@react-spring/web'
import { useContext } from 'react';
import { ColourContext } from '../contexts/ColourContext';
import { BiMailSend } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa';


export default function ContactHeader() {

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
        <>
        <div id='aboutMeHeaderText'>
        <animated.div style={mainFade}>
            <h1 style={style} className='aboutMeHeader'>Contact Me</h1>
        </animated.div>
        <animated.div style={subFade}>
        <p style={style} className='projectsSubText'>Like what you see? Feel free to contact me below, I am more than happy to have a chat!</p>
        <p style={style} className='projectsSubText'>I will try my best to get back to you as soon as possible. </p>
        <p style={style} className='projectsSubText spacer'>Email me:</p>
        <a href='mailto:zakarys2005@gmail.com' rel="noopener noreferrer">
            <BiMailSend style={style} className='email' />
        </a>
        <p style={style} className='projectsSubText'>Connect with me on LinkedIn:</p>
        <FaLinkedin style={style} className='email' onClick={() => window.open('https://www.linkedin.com/in/zakary-sutherland/', '_blank')} />
        <p style={style} className='projectsSubText'>Thank you for visiting my portfolio!</p>
        </animated.div>
        </div>
        </>
    )
}