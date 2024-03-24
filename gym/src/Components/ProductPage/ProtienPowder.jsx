import React from "react";
import ProtienCard from "./ProductCard/ProtienCard";
import ProtienShakeData from "./ProductData/ProtienShakesData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";
import { Link } from "react-router-dom";

const ProductDisplay = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Protien <span className="Mont800" style={{color:"white"}}>Powder</span></h1>
        <p className="Mont400" style={{fontSize:13}}>Our Protein Shakes are made with high-quality ingredients and are available in a variety of flavors. They are a convenient way to get your daily protein intake.</p>
          <div className="ProdAlnCard">
              {ProtienShakeData.map((ProtienShakeData) => (
                  <ProtienCard key={ProtienShakeData.id} ProtienShakeData={ProtienShakeData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default ProductDisplay;
