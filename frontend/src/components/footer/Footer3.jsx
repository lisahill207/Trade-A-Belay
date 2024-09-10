import React from "react";
import FooterLogo from "../../images/movementFooter.png";

const Footer3 = () => {
  return (
    <div className="flex justify-between items-center m-3 w-95dvw">
      <div className="text-white self-center">Movement &copy; 2023</div>
      <div className="self-center w-32">
        <img src={FooterLogo} alt="Movement gym vertical logo" />
      </div>
    </div>
  );
};

export default Footer3;
