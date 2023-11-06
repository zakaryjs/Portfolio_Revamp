import '../styles/SkillsHeader.css'
import { useSpring, animated } from '@react-spring/web'
import { useContext } from 'react';
import { ColourContext } from '../contexts/ColourContext';
import { FaCss3Alt, FaHtml5, FaSass, FaNodeJs, FaReact, FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiReactrouter, SiFlask, SiPostgresql, SiMysql, SiMongodb } from "react-icons/si";


export default function SkillsHeader() {

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
            <h1 style={style} className='mainHeader'>Skills</h1>
        </animated.div>
        <animated.div style={subFade}>
            <FaHtml5 style={style} className='socialIcons' /> <FaCss3Alt style={style} className='socialIcons' /> <FaSass style={style} className='socialIcons' />
        </animated.div>
        <animated.div style={subFade}>
            <IoLogoJavascript style={style} className='socialIcons' /> <FaNodeJs style={style} className='socialIcons' /> <SiExpress style={style} className='socialIcons' /> <FaReact style={style} className='socialIcons' /> <SiReactrouter style={style} className='socialIcons' />
        </animated.div>
        <animated.div style={subFade}>
            <FaPython style={style} className='socialIcons' /> <SiFlask style={style} className='socialIcons' />
        </animated.div>
        <animated.div style={subFade}>
            <SiPostgresql style={style} className='socialIcons' /> <SiMysql style={style} className='socialIcons' /> <SiMongodb style={style} className='socialIcons' />
        </animated.div>
        </div>
        </>
    )
}