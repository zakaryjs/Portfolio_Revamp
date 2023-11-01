import '../styles/Header.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Header() {


    return (
        <>
        <div id='mainHeaderText'>
        <h1 className='mainHeader'>Zakary Sutherland</h1>
        <h3 className='mainHeader'>Web Developer in Development</h3>
        <div>
            <FaGithub className='socialIcons' /> <FaLinkedin className='socialIcons' />
        </div>
        </div>
        </>
    )
}