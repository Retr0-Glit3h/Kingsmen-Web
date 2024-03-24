import React from "react";
import FatLossCard from "./ProductCard/FatLossCard";
import FatLossData from "./ProductData/FatLossData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const FatLoss = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Fat <span className="Mont800" style={{color:"white"}}>Loss</span></h1>
          <div className="ProdAlnCard">
              {FatLossData.map((FatLossData) => (
                  <FatLossCard key={FatLossData.id} FatLossData={FatLossData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default FatLoss;
