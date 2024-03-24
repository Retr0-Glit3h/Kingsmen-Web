import React from "react";
import VitaminsCard from "./ProductCard/VitaminsCard";
import VitaminsData from "./ProductData/VitaminsData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const Vitamins = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Vitamins & <span className="Mont800" style={{color:"white"}}>Supplements</span></h1>
        <p className="Mont400" style={{fontSize:13}}>Our Protein Shakes are made with high-quality ingredients and are available in a variety of flavors. They are a convenient way to get your daily protein intake.</p>
          <div className="ProdAlnCard">
              {VitaminsData.map((VitaminsData) => (
                  <VitaminsCard key={VitaminsData.id} VitaminsData={VitaminsData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default Vitamins;
