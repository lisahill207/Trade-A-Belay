import React from "react";

import Footer1 from "./Footer1.jsx";
import Footer2 from "./Footer2.jsx";
import Footer3 from "./Footer3.jsx";

const Footer = () => {
  return (
    <footer className=" bg-grey flex justify-center align-center">
      <div className="flex flex-col justify-center align-center w-90dvw">
        <Footer1 />
        <Footer2 />
        <Footer3 />
      </div>
    </footer>
  );
};

export default Footer;
