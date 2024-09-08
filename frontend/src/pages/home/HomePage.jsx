import React from "react";
import NavBar from "../../components/navbar/NavBar.jsx";
import Bios from "../../components/bios/Bios.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Login from "../../components/bottom/Login.jsx";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Bios />
      <Login />
      <Footer />
    </div>
  );
};

export default HomePage;
