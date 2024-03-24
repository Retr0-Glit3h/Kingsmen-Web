import React from "react";
import CartPageData from "./CartPageData";
import "./CheckoutCard.css";

function CheckoutCard() {
    var TotalValue = 0;
    for(var i=0; i<CartPageData.length; i++) {  
        TotalValue = TotalValue + parseInt(CartPageData[i].CartPagePrice);
    }
    return(<>
            <div className="CheckoutCard">
              <h1 className="Mont800" style={{textAlign:"center", color:"#393E46", fontSize:17}}>Order Summary ({CartPageData.length} items)</h1>
                <div className="row">
                    <hr/>
                    <div className="col-6">
                        <p className="Mont400" style={{textAlign:"left", fontSize:17}}>Price</p>
                        <p className="Mont400" style={{textAlign:"left", fontSize:17}}>Delivery Fees</p>
                    </div>
                    
                    <div className="col-6">
                        <p className="Mont400" style={{textAlign:"right", fontSize:17}}>₹{TotalValue}</p>
                        <p className="Mont400" style={{textAlign:"right", fontSize:17, color:"#23B295"}}>FREE</p>
                    </div>
                    <hr/>
                    <div className="col-6">
                        <p className="Mont600" style={{textAlign:"left", fontSize:17}}>Total Amount</p>
                    </div>
                    <div className="col-6">
                        <p className="Mont600" style={{textAlign:"right", fontSize:17}}>₹{TotalValue}</p>
                    </div>
                    <hr/>
                    <div className="CheckoutBtnAln">
                        <button class="CheckoutBtn">
                            Checkout
                            <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
    </>)
}

export default CheckoutCard;