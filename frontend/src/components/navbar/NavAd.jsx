import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const NavAd = () => {
  return (
    <div className="md:hidden sm:hidden lg:hidden w-dvw text-center bg-blue-950 text-white p-2 text-sm">
      Short-Term Summer Membership Sale: Destination Summer
      <div className="inline ml-3.5 text-yellow-300">
        More <FontAwesomeIcon icon={faAnglesDown} />
      </div>
    </div>
  );
};

export default NavAd;
