import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const FooterNewsletter = () => {
  return (
    <div className="">
      <p className="bg-yellow text-dark-blue py-3.5 px-3.5 self-center text-xl md:text-xs">
        SIGN UP FOR OUR NEWSLETTER
        <FontAwesomeIcon icon={faArrowRight} className="pl-1" />
      </p>
    </div>
  );
};

export default FooterNewsletter;
