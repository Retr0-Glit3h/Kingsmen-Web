import React from "react";
import { useState } from "react";
import "./ProdPageCard.css";


const PrePostWorkoutCard = ({PrePostWorkoutData}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');
  const {PrePostWorkoutImage, PrePostWorkoutTitle, PrePostWorkoutDesc, PrePostWorkoutPrice} = PrePostWorkoutData;

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
            <img src={PrePostWorkoutImage} alt={PrePostWorkoutTitle} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{PrePostWorkoutTitle}</p>
            <p class="text-body " style={{fontSize:12}}>{PrePostWorkoutDesc}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>₹{PrePostWorkoutPrice}</span>
          </div>
          <div class="ProductDispCard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default PrePostWorkoutCard;