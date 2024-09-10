import React from "react";
import FooterNewsletter from "./FooterNewsletter.jsx";
import FooterSocial from "./FooterSocial.jsx";

const Footer1 = () => {
  return (
    <div className="flex flex-row justify-around items-center m-3 w-95dvw">
      <FooterNewsletter />
      <FooterSocial />
    </div>
  );
};

export default Footer1;
