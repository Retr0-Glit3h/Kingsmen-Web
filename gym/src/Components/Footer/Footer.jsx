import React from "react";
import Social from "./Social/Social.jsx";
import "./Footer.css";

function FooterNew() {
  return (
    <div>
      <footer className="footerNew">
        <Social />
        <div className="tline alignBoxFoot" a>
          <p className="Mont400" style={{ color: "#c4c4c4", fontSize: 12}}>
          Where Style Meets Quality - Elevate Your Wardrobe Today!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FooterNew;
