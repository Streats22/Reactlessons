import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => (
    <nav>
        <div className="nav-logo">The <i className="fa-solid fa-mobile-notch iphone-nav"></i> Shop</div>
        <ul className="links-nav">
            <li className="link-nav"><Link to="/">About</Link></li>
            <li className="link-nav"><Link to="/About">Features</Link></li>
            <li className="link-nav"><Link to="/Contact">Price</Link></li>
            <li className="link-nav"><Link to="/Login">Contact</Link></li>
        </ul>
        <button className="login-button-nav">Login</button>
    </nav>
);

export default Navbar;
