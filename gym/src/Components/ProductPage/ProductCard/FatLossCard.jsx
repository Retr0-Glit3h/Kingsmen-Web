import React from "react";
import { useState } from "react";
import "./ProdPageCard.css";


const FatLossCard = ({FatLossData}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');
  const {FatLossImage, FatLossTitle, FatLossDesc, FatLossPrice} = FatLossData;

  function handleChange() {
      if (buttonTxt === 'Remove from Cart') {
        setButtonTxt('Add to Cart');
      } else{
        setButtonTxt('Remove from Cart');
      }
    }
    return (
      <>
        <div class="ProductDispCard">
          <div class="ProductDispCard-img">
            <img src={FatLossImage} alt={FatLossTitle} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{FatLossTitle}</p>
            <p class="text-body " style={{fontSize:12}}>{FatLossDesc}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>₹{FatLossPrice}</span>
          </div>
          <div class="ProductDispCard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default FatLossCard;