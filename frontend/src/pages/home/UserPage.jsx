import React from "react";
import NavBar from "../../components/navbar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import UserBios from "../../components/body/UserBios.jsx";
import Logout from "../../components/bottom/Logout.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col font-sans w-dvw m-0 p-0 font-normal">
      <NavBar />
      <UserBios />
      <Logout />
      <Footer />
    </div>
  );
};

export default HomePage;
