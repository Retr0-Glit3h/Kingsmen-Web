import React from "react";
import './CartPageCard.css';
import CartButton from "./CartButtons/CartButton";

const CartCard = ({CartPageData}) => {
  const {CartPageImage, CartPageTitle, CartPageDesc, CartPagePrice} = CartPageData;

    return (<>
        <div className="CartPageCard">
            <div className="CartPageCardImg">
                <img src={CartPageImage} alt="CartProducts" />
            </div>
            <div className="CartPageCardInfo vl-card">
                <h3 className="Mont800">{CartPageTitle}</h3>
                <p className="Mont300">{CartPageDesc}</p>
                <p className="Mont300">Price: ₹{CartPagePrice}</p>
            </div>
            <div className="CartButtonAln">
                <CartButton />
            </div>
        </div>
    </>)
};

export default CartCard;