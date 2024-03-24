import React from "react";
import { useState } from "react";
import "./ProdPageCard.css";


const FitFoodsCard = ({FitFoodsData}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');
  const {FitFoodsImage, FitFoodsTitle, FitFoodsDesc, FitFoodsPrice} = FitFoodsData;

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
            <img src={FitFoodsImage} alt={FitFoodsTitle} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{FitFoodsTitle}</p>
            <p class="text-body " style={{fontSize:12}}>{FitFoodsDesc}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>₹{FitFoodsPrice}</span>
          </div>
          <div class="ProductDispCard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default FitFoodsCard;