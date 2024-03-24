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
            All products are manufactured at FSSAI approved manufacturing facilities and are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FooterNew;
