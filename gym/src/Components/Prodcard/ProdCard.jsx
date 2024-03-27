import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProdCard.css";
// import ProdData from './prod_Data';

const ProdCard = ({product}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');
  function handleChange() {
      if (buttonTxt === 'Remove from Cart') {
        setButtonTxt('Add to Cart');
      } else{
        setButtonTxt('Remove from Cart');
      }
    }
    return (
      <>
      <Link className="ProdCardLink" to={`/Details/${product.ProductID}`}>
        <div class="Prodcard">
          <div class="Prodcard-img">
            <img src={product?product.ProductImg:null} alt={product?product.ProductName:"NO DATA"} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{product?product.ProductName:"No Data"}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>{product?product.ProductPrice:"---"}</span>
          </div>
          <div class="Prodcard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
        </Link>
      </>
    );
};



export default ProdCard;