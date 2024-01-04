import React from "react";
import mdlogo from "../assets/mdlogo.png";

function Footer() {
  return (
    <div className="hp-footer">
      <div className="hp-footer-wrapper">
        <div className="hp-footer-info-right">
          <p className="hp-footer-info-detail">
            mydurbar.com
            <br />
            Email - info@mydurbar.com
            <br />
            Phone - +91-9643699643
          </p>
          <h6 className="hp-footer-info-copyright">
            © 2022 mydurbar.com is an enterprise unit of TSS Initiatives LLP
          </h6>
        </div>
        <div className="hp-footer-info-left">
          <img alt="" src={mdlogo} width="150" height="150" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
