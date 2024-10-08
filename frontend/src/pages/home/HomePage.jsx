import React from "react";
import NavBar from "../../components/navbar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Login from "../../components/bottom/Login.jsx";
import HomeBios from "../../components/body/HomeBios.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col font-sans w-dvw m-0 p-0 font-normal">
      <NavBar />
      <HomeBios />
      <Login />
      <Footer />
    </div>
  );
};

export default HomePage;
