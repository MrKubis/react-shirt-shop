import { NavLink } from "react-router-dom";
import './NavBar.css'
function NavBar(){
    return (
        <div className="navbar-container">
            <div className="nav-route">
                <NavLink to="/" viewTransition>Home</NavLink>
            </div>
            <div className="nav-route">
                <NavLink to="/shirts" viewTransition>Shirts</NavLink>
            </div>
            <div className="nav-route">
                <NavLink to = "/order" viewTransition>Your order</NavLink>
            </div>
        </div>
    );
}

export default NavBar;