import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar(){

    let activeLink = {
        textDecorationColor: "yellow"
    }

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? activeLink : undefined}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({isActive}) => isActive ? activeLink : undefined}>
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills" style={({isActive}) => isActive ? activeLink : undefined}>
                        Skills
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}