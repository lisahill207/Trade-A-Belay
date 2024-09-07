import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const NavAd = () => {
  return (
    <div className="nav-ad">
      Short-Term Summer Membership Sale: Destination Summer
      <div className="ad-more">
        More <FontAwesomeIcon icon={faAnglesDown} />
      </div>
    </div>
  );
};

export default NavAd;
