import React, { useState } from "react";
import "./CheckoutCard.css";

function CheckoutCard({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  var totalValue = 0;
  var finalValue = 0;
  var gst = 0;

  data.forEach((product) => {
    totalValue += product.ProductPrice;
    gst = totalValue * 0.18;
    finalValue = totalValue + gst + 25;
  });

  var cartSize = data.length;
  var itemText = cartSize === 1 ? "item" : "items";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    const handlePayment = () => {
        alert("Your order has been placed successfully!");
        localStorage.removeItem("cartData");
        setIsModalOpen(false);
        window.location.reload();
    };

  return (
    <>
      <div className="CheckoutCard">
        <div className="orderSummary">
          <span className="orderSummaryText">Order Summary ({cartSize} {itemText})</span>
        </div>
        <div className="row">
          <hr />
          <div className="col-6">
            <p className="Mont400" style={{ textAlign: "left", fontSize: 17 }}>Price</p>
            <p className="Mont400" style={{ textAlign: "left", fontSize: 17 }}>Delivery Fees</p>
            <p className="Mont400" style={{ textAlign: "left", fontSize: 17 }}>GST</p>
            <p className="Mont400" style={{ textAlign: "left", fontSize: 17 }}>Packaging Fees</p>
          </div>

          <div className="col-6">
            <p className="Mont400" style={{ textAlign: "right", fontSize: 17 }}>₹ {totalValue}</p>
            <p className="Mont400" style={{ textAlign: "right", fontSize: 17, color: "#23B295" }}>FREE</p>
            <p className="Mont400" style={{ textAlign: "right", fontSize: 17 }}>₹ {gst}</p>
            <p className="Mont400" style={{ textAlign: "right", fontSize: 17 }}>₹ 25</p>
          </div>
          <hr />
          <div className="col-6">
            <p className="Mont600" style={{ textAlign: "left", fontSize: 17 }}>Total Amount</p>
          </div>
          <div className="col-6">
            <p className="Mont600" style={{ textAlign: "right", fontSize: 17 }}>₹ {finalValue}</p>
          </div>
          <hr />
          <div className="CheckoutBtnAln">
            <button className="CheckoutBtn" onClick={openModal}>Checkout
              <svg className="svgIcon" viewBox="0 0 576 512">
                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modalBox">
          <div className="modal-content">
            <span className="closeBtn" onClick={closeModal}>&times;</span>
            <h2>Payment</h2>
            <div className="CardDetail">
                <span className="PaymentModetitle">Debit or Credit Card</span>
                <input className="DBCardInput1" type="number" placeholder="Card Number" />
                <input className="DBCardInput1" type="number" placeholder="Name on Card" />
                <div className="DBCardDetails">
                    <input className="DBCardInput2" type="text" placeholder="Expiry Date" />
                    <input className="DBCardInput2" type="number" placeholder="CVV" />
                </div>
                <button className="DBCardBtn" onClick={handlePayment}>Pay</button>
            </div>
            <div className="CardDetail" onClick={handlePayment}>
                <span className="PaymentModetitle">Pay on Delivery</span>
                <span className="PayOnDeliveryText">You will pay when the product is delivered to you. You can pay with card or cash after delivery.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckoutCard;
