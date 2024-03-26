import React from "react";
import { useState } from "react";
import "./ProdCard.css";
// import ProdData from './prod_Data';

const ProdCard = ({product}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');

  function handleChange() {
      if (buttonTxt === 'Remove from Cart') {
        setButtonTxt('Add to Cart');
      } else{
        setButtonTxt('Remove from Cart');
      }
    }
    return (
      <>
        <div class="Prodcard">
          <div class="Prodcard-img">
            <img src={product.ProductImg} alt={product.ProductName} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{product.ProductName}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>{product.ProductPrice}</span>
          </div>
          <div class="Prodcard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default ProdCard;