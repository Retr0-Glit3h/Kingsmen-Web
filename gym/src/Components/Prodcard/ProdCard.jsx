import React from "react";
import { useState } from "react";
import "./ProdCard.css";
// import ProdData from './prod_Data';

const ProdCard = ({ProdImage, ProdTitle, ProdPrice}) => {
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
            <img src={ProdImage} alt={ProdTitle} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{ProdTitle}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>{ProdPrice}</span>
          </div>
          <div class="Prodcard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default ProdCard;