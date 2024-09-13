import React from "react";
import UserBio from "./UserBio.jsx";
import AllBios from "./AllBios.jsx";
import UpdateProfile from "./UpdateProfile.jsx";

const UserBios = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-dvw pattern-dots pattern-dot-color pattern-bg-mid-grey
  pattern-size-2 pattern-opacity-100"
    >
      <div className="w-dvw p-2 flex flex-col justify-center items-center ">
        <div className="text-center text-dark-blue">
          <h2 className="text-4xl font-bold">Trade-A-Belay</h2>
          <p className="text-xl p-1">Where climbing partnerships begin</p>
        </div>
        <div className="flex flex-wrap justify-around items-center">
          <UserBio />
          <UpdateProfile />
        </div>
        <div>
          <AllBios />
        </div>
      </div>
    </div>
  );
};

export default UserBios;
