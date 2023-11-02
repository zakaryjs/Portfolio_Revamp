import '../styles/Header.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web'
import { useContext } from 'react';
import { ColourContext } from '../contexts/ColourContext';


export default function Header() {

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
        <div id='mainHeaderText'>
        <animated.div style={mainFade}>
            <h1 style={style} className='mainHeader'>Zakary Sutherland</h1>
            <h3 style={style} className='mainHeader'>Web Developer in Development</h3>
        </animated.div>
        <animated.div style={subFade}>
            <FaGithub style={style} className='socialIcons' onClick={() => window.open('https://github.com/zakaryjs', '_blank') } /> <FaLinkedin style={style} className='socialIcons' onClick={() => window.open('https://www.linkedin.com/in/zakary-sutherland/', '_blank')} />
        </animated.div>
        </div>
        </>
    )
}