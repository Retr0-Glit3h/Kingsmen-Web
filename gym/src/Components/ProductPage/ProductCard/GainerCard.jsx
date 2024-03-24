import React from "react";
import { useState } from "react";
import "./ProdPageCard.css";


const GainerCard = ({GainerData}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');
  const {GainerImage, GainerTitle, GainerDesc, GainerPrice} = GainerData;

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
            <img src={GainerImage} alt={GainerTitle} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{GainerTitle}</p>
            <p class="text-body " style={{fontSize:12}}>{GainerDesc}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>₹{GainerPrice}</span>
          </div>
          <div class="ProductDispCard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default GainerCard;