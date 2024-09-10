import React from "react";
import FooterLogo from "../../images/movementFooter.png";

const Footer3 = () => {
  return (
    <div className="flex justify-between items-center m-3 w-95dvw md:flex-col-reverse md:justify-center md:items-center md:text-center">
      <div className="text-white self-center md:text-sm md:p-1">
        Movement &copy; 2023
      </div>
      <div className="self-center w-32">
        <img src={FooterLogo} alt="Movement gym vertical logo" />
      </div>
    </div>
  );
};

export default Footer3;
