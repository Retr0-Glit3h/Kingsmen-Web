import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import "../Fonts.css";
// import ProdCard from "./Prodcard/ProdCard";

const Prod = () => {
  return (
    <>
      <div className="alignProdItems resizeCard">
        <h1 className="Mont800" style={{paddingTop:"50px"}}>Categories</h1>
        <br></br>
        <section>
          <div className="rowCatCard">

            <div className="CatCard">
              <Link to="/ProductDisplay">
                <img src="https://img1.hkrtcdn.com/27140/smn_image_2713960_o.png" alt="Protiens"/>
              </Link>
            </div>
            
            <div className="CatCard">
              <Link to="/Gainer">
                <img src="https://img7.hkrtcdn.com/27140/smn_image_2713966_o.png" alt="Gainers"/>
              </Link>
            </div>

            <div className="CatCard">
              <Link to="/PrePostWorkout">
                <img src="https://img5.hkrtcdn.com/27140/smn_image_2713974_o.png" alt="Pre/Post Workout"/>
              </Link>
            </div>
            
          </div>
          <br />
          <div className="rowCatCard">

            <div className="CatCard">
            <Link to="/FitFoods">
              <img src="https://img9.hkrtcdn.com/27140/smn_image_2713968_o.png" alt="Fit Foods" />
            </Link>
            </div>

            <div className="CatCard">
            <Link to="/FatLoss">
              <img src="https://img1.hkrtcdn.com/27140/smn_image_2713980_o.png"alt="Fat Loss" />
            </Link>
            </div>

            <div className="CatCard">
            <Link to="/Vitamins">
              <img src="https://img9.hkrtcdn.com/27140/smn_image_2713978_o.png" alt="Vitamins & Supplements"/>
            </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default Prod;
