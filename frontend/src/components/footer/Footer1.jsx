import React from "react";
import FooterNewsletter from "./FooterNewsletter.jsx";
import FooterSocial from "./FooterSocial.jsx";

const Footer1 = () => {
  return (
    <div className="flex flex-row justify-around items-center m-3 w-95dvw md:flex-col md:justify-center md:w-dvw">
      <FooterNewsletter />
      <FooterSocial />
    </div>
  );
};

export default Footer1;
