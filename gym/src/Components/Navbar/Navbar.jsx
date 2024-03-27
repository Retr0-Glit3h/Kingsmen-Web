import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import CartCard from "../Prodcard/CartCard";

function NavBar() {
	return (
		<header>
			{/* <Link to="/" className="logoLink"><h3 className="Sedgwick400 lgo">Gymtopia</h3></Link> */}
			<div className="navbar">
				<div className="navLinks">
					<nav>
						<Link to="/">Home</Link>
						<Link to="/Categories">Products</Link>
						<Link to="/" className="logoLink"><h3 className="Sedgwick400 lgo">Kingsmen</h3></Link>
						<Link to="">About</Link>
						<Link to="">Contact</Link>
					</nav>
				</div>
				<div className="CartSec">
					<CartCard/>
				</div>
			</div>
		</header>
	);
}

export default NavBar;