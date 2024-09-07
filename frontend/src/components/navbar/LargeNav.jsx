import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const LargeNav = () => {
  return (
    <div className="large-nav">
      <div className="logo-nav"></div>
      <ul className="large-nav-list">
        <li className="large-nav-item">WHY US</li>
        <li className="large-nav-item">FIRST VISIT</li>
        <li className="large-nav-item">|</li>
        <li className="large-nav-item">
          GYM <FontAwesomeIcon icon={faHouse} />
        </li>
        <li className="large-nav-item">CALENDAR</li>
        <li className="large-nav-item">CLIMBING</li>
        <li className="large-nav-item">YOGA</li>
        <li className="large-nav-item">FITNESS</li>
      </ul>
      <div className="large-nav-location">
        <FontAwesomeIcon icon={faLocationDot} />
        TIMONIUM
      </div>
    </div>
  );
};

export default LargeNav;
