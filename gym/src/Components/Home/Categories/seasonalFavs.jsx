import React from "react";
import { Link } from "react-router-dom";
import "./seasonalFavs.css";
import Data from "./seasonalData";

function SeasonalFavs(){

    return(<>
    {Data.map((item) => {
        return(
            <div className="seasonalCard">
                <div className="seasonalCardImg">
                    <img src={item.img} alt={item.alt} className="seasonalImg"/>
                </div>
                <div className="seasonalOverlay">
                    <span class="seasonalTitle">{item.title}</span>
                </div>
            </div>
        )
    })}
    </>)

}

export default SeasonalFavs;