import { useContext } from 'react'
import '../styles/Footer.css'
import { useSpring, animated } from '@react-spring/web'
import { ColourContext } from '../contexts/ColourContext'


export default function Footer(){

    const {colour} = useContext(ColourContext)

    const style = {color: colour}

    const mainFade = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        config: { duration: 2500 }
    })

    return (
        <>
        <div id='mainFooterText'>
            <animated.div style={mainFade}>
                <h3 style={style} className='mainFooter'>Copyright Zakary Sutherland</h3>
            </animated.div>
        </div>
        </>
    )
}