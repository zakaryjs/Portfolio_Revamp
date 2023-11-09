import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar(){

    let link = {
        textDecorationColor: "white",
        color: "white"
    }

    let activeLink = {
        color: "yellow",
        textDecorationColor: "yellow"
    }

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? activeLink : link}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({isActive}) => isActive ? activeLink : link}>
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills" style={({isActive}) => isActive ? activeLink : link}>
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" style={({isActive}) => isActive ? activeLink : link}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" style={({isActive}) => isActive ? activeLink : link}>
                        Contact Me
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}