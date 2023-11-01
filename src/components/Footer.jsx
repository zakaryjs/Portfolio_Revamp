import '../styles/Footer.css'
import { useSpring, animated } from '@react-spring/web'


export default function Footer(){

    const mainFade = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        config: { duration: 2500 }
    })

    return (
        <>
        <div id='mainFooterText'>
            <animated.div style={mainFade}>
                <h3 className='mainFooter'>Copyright Zakary Sutherland</h3>
            </animated.div>
        </div>
        </>
    )
}