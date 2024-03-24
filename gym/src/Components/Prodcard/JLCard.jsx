import React from "react";
import { useState } from "react";
import "./ProdCard.css";

const JLCard = ({JustLaunchedData}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');
  const {ProdImage, ProdTitle, ProdDesc, ProdPrice} = JustLaunchedData;

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
            <p class="text-body " style={{fontSize:12}}>{ProdDesc}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>{ProdPrice}</span>
          </div>
          <div class="Prodcard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default JLCard;