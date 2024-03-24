import React from "react";
import FitFoodsCard from "./ProductCard/FitFoodsCard";
import FitFoodsData from "./ProductData/FitFoodsData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const FitFoods = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Fit <span className="Mont800" style={{color:"white"}}>Foods</span></h1>
        <p className="Mont400" style={{fontSize:13}}>Boost your energy and performance with our Fit Foods that are good for your body.</p>
          <div className="ProdAlnCard">
              {FitFoodsData.map((FitFoodsData) => (
                  <FitFoodsCard key={FitFoodsData.id} FitFoodsData={FitFoodsData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default FitFoods;
