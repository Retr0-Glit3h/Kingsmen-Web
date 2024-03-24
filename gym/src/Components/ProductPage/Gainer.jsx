import React from "react";
import GainerCard from "./ProductCard/GainerCard";
import GainerData from "./ProductData/GainerData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const Gainer = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Gainer</h1>
        <p className="Mont400" style={{fontSize:13}}>We have a range of Mass Gainer & Weight Gainer in a variety of flavours and special ingredients like Digezyme, a blend of digestive enzymes, to give better results with maximum absorption.</p>
          <div className="ProdAlnCard">
              {GainerData.map((GainerData) => (
                  <GainerCard key={GainerData.id} GainerData={GainerData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default Gainer;
