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
            </ul>
        </nav>
    )
}