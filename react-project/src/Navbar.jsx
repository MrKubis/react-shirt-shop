import { NavLink } from "react-router-dom";
import './NavBar.css'
function NavBar(){
    return (
        <nav className="nav">
            <div className="nav-home-container">
                <NavLink to="/" >Home</NavLink>
            </div>

            <div className="nav-routes-container">
                <div className="nav-route">
                    <NavLink to="/shirts" >Shirts</NavLink>
                </div>
                <div className="nav-route">
                    <NavLink to = "/order">Your order</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;