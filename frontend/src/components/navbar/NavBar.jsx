import React from "react";
import NavAd from "./NavAd.jsx";
import SmallNav from "./SmallNav.jsx";
import LargeNav from "./LargeNav.jsx";
import NavMobile from "./NavMobile.jsx";

const NavBar = () => {
  return (
    <nav className="w-dvw flex-col">
      <NavAd />
      <SmallNav />
      <LargeNav />
      <NavMobile />
    </nav>
  );
};

export default NavBar;
