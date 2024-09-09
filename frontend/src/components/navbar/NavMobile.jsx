import React from "react";
import movementLogo from "../../images/movement.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavMobile = () => {
  return (
    <div className="xl:hidden bg-blue-950 text-white w-dvw h-21 flex justify-between items-center">
      <div className="flex justify-start items-center w-1/3">
        <div>
          <img
            src={movementLogo}
            className="p-5 w-52"
            alt="Logo for Movement Gyms"
          />
        </div>
      </div>
      <div className="flex justify-end items-center w-2/3">
        <div className="flex items-center pr-7">
          <div className="fixed right-[25px] text-[40px] cursor-pointer">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
