import React from "react";
import FooterLogo from "../../images/movementFooter.png";

const Footer3 = () => {
  return (
    <div className="footer-3">
      <div className="copy">Movement &copy; 2023</div>
      <div className="logo-vertical">
        <img src={FooterLogo} alt="Movement gym vertical logo" />
      </div>
    </div>
  );
};

export default Footer3;
