import React from "react";
import './CartPageCard.css';

const CartCard = ({CartPageData}) => {
    return (<>
        <div className="CartPageCard">
            <div className="CartPageCardImg">
                <img src={CartPageData.ProductImg} alt="CartProducts" className="CartPageImg" />
            </div>
            <div className="CartPageCardInfo">
                <span className="CartPageProdTitle">{CartPageData.ProductName}</span>
                <span className="CartPageProdCat">{CartPageData.ProductCategory}</span>
                <span className="CartPageProdPrice">Price: ₹{CartPageData.ProductPrice}</span>
            </div>
        </div>
    </>)
};

export default CartCard;