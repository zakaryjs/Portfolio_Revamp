import '../styles/ProjectsHeader.css'
import { useSpring, animated } from '@react-spring/web'
import { useContext } from 'react';
import { ColourContext } from '../contexts/ColourContext';
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa6';


export default function ProjectsHeader() {

    let projects = [
        {
            name: 'Portfolio',
            description: 'The site that you are currently viewing now. It is a work-in-progress redesign of my first Coder Academy assignment, now built using react.',
            link: 'https://github.com/zakaryjs/Portfolio_Revamp'
        },
        {
            name: "Who's that Pokemon?",
            description: 'A React app built as a part of the week-long Coder Academy React hackathon. Randomly chooses Pokemon, and the user needs to guess the name.',
            link: 'https://github.com/zakaryjs/Hackathon_-_Whos-That-Pokemon-React'
        },
        {
            name: 'Weatherly',
            description: 'Website built with React that uses WeatherAPI to fetch the current and upcoming weather conditions for any given location.',
            link: 'https://github.com/zakaryjs/Project_-_Weatherly-React'
        },
        // {
        //     name: 'SpotiMy',
        //     description: 'SpotiMy is a website that uses the Last.FM API in order to retrieve the song a user is currently listening to, or has most recently listened to.',
        //     link: 'https://github.com/zakaryjs/Project_-_SpotiMy'
        // },
        // {
        //     name: 'Webserver API',
        //     description: 'An API built with the Flask framework designed to manage the organisation of physical media.',
        //     link: 'https://github.com/zakaryjs/CA-T2A2-Webserver_API'
        // },
        // {
        //     name: 'Terminal Application - zCalendar',
        //     description: 'Calendar terminal application built with Python. Users can add, delete, and view events to any given date in a year. Data is written to CSV file.',
        //     link: 'https://github.com/zakaryjs/CA-T1A3-Terminal_Application'
        // },
        // {
        //     name: 'Portfolio (old)',
        //     description: 'First project, built with HTML and CSS.',
        //     link: 'https://github.com/zakaryjs/CA-T1A2-Portfolio'
        // }
    ]

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
            <h1 style={style} className='aboutMeHeader'>Projects</h1>
        </animated.div>
        <animated.div style={subFade}>
        <FaGithub style={style} className='github' onClick={() => window.open('https://github.com/zakaryjs', '_blank') } />
            {projects.map(project => (
                <div key={project.name}>
                    <h3 style={style} className='projectsSubText'>{project.name}</h3>
                    <p style={style} className='projectsSubText'>{project.description}</p>
                    <FiExternalLink style={style} className='socialIcons' onClick={() => window.open(`${project.link}`, '_blank') } />
                </div>
            ))}
        </animated.div>
        </div>
        </>
    )
}