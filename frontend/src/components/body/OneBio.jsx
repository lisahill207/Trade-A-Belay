import React from "react";
import logo from "../../images/movement.png";

const OneBio = ({ bio }) => {
  return (
    <div>
      <div className="card m-2 bg-dark-blue max-w-96 shadow-xl">
        <figure className="w-96 h-400">
          <img
            className="object-cover"
            src={bio.profileImg || `${logo}`}
            alt="Profile image"
          />
        </figure>
        <div className="card-body text-wrap">
          <h2 className="card-title">{bio.fullName}</h2>
          <h3 className="">
            {bio.style}, {bio.gym}
          </h3>
          <p className="">{bio.phone}</p>
          <p>{bio.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default OneBio;
