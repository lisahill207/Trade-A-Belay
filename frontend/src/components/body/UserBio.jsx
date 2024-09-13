import { React, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import logo from "../../images/movement.png";

const UserBio = () => {
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });

  return (
    <div>
      <div className="card m-2 bg-dark-blue max-w-96 shadow-xl">
        <figure className="w-96 h-400">
          <img
            className="object-cover"
            src={authUser.profileImg || `${logo}`}
            alt="Profile image"
          />
        </figure>
        <div className="card-body text-wrap">
          <h2 className="card-title">{authUser?.fullName}</h2>
          <h3 className="">
            {authUser?.style}, {authUser?.gym}
          </h3>
          <p>{authUser?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
