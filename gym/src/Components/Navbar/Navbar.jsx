import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import CartCard from "../Prodcard/CartCard";

function NavBar() {
	return (
		<header className="navigationBar">
				<div className="navLinks">
					<nav>
						<Link to="/Categories" className="navUrls">Products</Link>
						<Link to="/Cart" className="navUrls">Cart</Link>
						<Link to="/home" className="logoLink"><h3 className="lgo">Kingsmen</h3></Link>
						<Link to="/About " className="navUrls">About</Link>
						<Link to="/Test" className="navUrls">Profile</Link>
					</nav>
				</div>
		</header>
	);
}

export default NavBar;