import '../styles/Header.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web'


export default function Header() {

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
            <h1 className='mainHeader'>Zakary Sutherland</h1>
            <h3 className='mainHeader'>Web Developer in Development</h3>
        </animated.div>
        <animated.div style={subFade}>
            <FaGithub className='socialIcons' /> <FaLinkedin className='socialIcons' />
        </animated.div>
        </div>
        </>
    )
}