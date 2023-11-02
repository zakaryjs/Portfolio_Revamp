import '../styles/AboutMeHeader.css'
import { useSpring, animated } from '@react-spring/web'



export default function AboutMeHeader() {

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
                <h1 className='aboutMeHeader'>About Me</h1>
            </animated.div>
            <animated.div style={subFade}>
                <h3 className='aboutMeSubText'>Hi! My name is Zakary.</h3>
                <p className='aboutMeSubText'>I'm a tech enthusiast, gamer, and a keen learner.</p>
                <p className='aboutMeSubText'>I have always loved technology, and have always had an interest in computer programming.</p>
                <p className='aboutMeSubText'>At just four years old, I was introduced to the PlayStation 2 and this quickly evolved into a love for technology as a whole.</p>
            </animated.div>
        </div>
    )
}