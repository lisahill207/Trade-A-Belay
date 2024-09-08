import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import movement from "../../images/movement.png";

const LargeNav = () => {
  return (
    <>
      <div className="md:hidden sm:hidden lg:hidden bg-blue-950 w-dvw flex justify-between text-white px-3 py-6">
        <div className="bg-cover bg-center flex justify-center content-center">
          <img src={movement} />
        </div>
        <ul className="content-center">
          <li className="inline list-none p-2.5 font-bold">WHY US</li>
          <li className="inline list-none p-2.5 font-bold">FIRST VISIT</li>
          <li className="inline list-none p-2.5 font-bold">|</li>
          <li className="inline list-none p-2.5 font-bold">
            GYM <FontAwesomeIcon icon={faHouse} className="text-white" />
          </li>
          <li className="inline list-none p-2.5 font-bold">CALENDAR</li>
          <li className="inline list-none p-2.5 font-bold">CLIMBING</li>
          <li className="inline list-none p-2.5 font-bold">YOGA</li>
          <li className="inline list-none p-2.5 font-bold">FITNESS</li>
        </ul>
        <div className="flex justify-end items-center font-bold mr-5">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="pr-1 text-yellow-300"
          />
          TIMONIUM
        </div>
      </div>
    </>
  );
};

export default LargeNav;
