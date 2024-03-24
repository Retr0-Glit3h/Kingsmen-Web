import React from "react";
import "./CartCard.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function CartCard() {
    const value = 0;
    return(<>
        <div>
            <div >
		        <Link to="/CartPage" className="cartCard"><ShoppingCartOutlinedIcon/></Link>
	        </div>
            
        </div>    
    </>)  
}

export default CartCard;