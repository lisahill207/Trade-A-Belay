import React from "react";
import NavBar from "../../../components/navbar/NavBar";
import Login from "../../../components/bottom/Login";
import Footer from "../../../components/footer/Footer";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
