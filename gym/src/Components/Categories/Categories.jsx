import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import "../Fonts.css";
import CategoriesData from "./CategoriesData"
import CategoriesCard from "./CategoriesCard/CategoriesCard";
// import ProdCard from "./Prodcard/ProdCard";

const Prod = () => {
  return (
    <>
      <div className="alignProdItems resizeCard">
        <h1 className="Mont800" style={{paddingTop:"50px"}}>Categories</h1>
        <br></br>
        <section >
          <div className="rowCatCard">
            {CategoriesData.map((trend) => (
                <CategoriesCard category={trend} />
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Prod;
