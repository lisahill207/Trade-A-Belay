import React from "react";
import NavBar from "../../../components/navbar/NavBar.jsx";
import Signup from "../../../components/bottom/Signup.jsx";
import Footer from "../../../components/footer/Footer.jsx";

const SignUpPage = () => {
  return (
    <div className="font-sans w-dvw m-0 p-0 font-normal">
      <NavBar />
      <Signup />
      <Footer />
    </div>
  );
};

export default SignUpPage;
