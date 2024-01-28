import { NavLink } from "react-router-dom";
import './Navbar.css'

export const NavBar = () => {
    const setActive = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }

    return (
        <nav className="Nav">
            <NavLink to="/" style={setActive}><img className="logoImg" src="" alt="" /> Home</NavLink>
            <NavLink to="/carrito" style={setActive}><img className="logoCart" src="" alt="" /><i className="fa-solid fa-cart-shopping">$ 0</i></NavLink>
        </nav>
    )
}