import React from "react";
import NavBar from "../../components/navbar/NavBar.jsx";
import Body from "../../components/body/Body.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Login from "../../components/bottom/Login.jsx";
import Signup from "../../components/bottom/Signup.jsx";

const HomePage = () => {
  return (
    <div className="font-sans w-dvw m-0 p-0 font-normal">
      <NavBar />
      <Body />
      <Login />
      <Footer />
    </div>
  );
};

export default HomePage;
