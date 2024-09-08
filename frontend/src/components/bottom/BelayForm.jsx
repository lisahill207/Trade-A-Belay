import React from "react";

const BelayForm = () => {
  return (
    <div className="form">
      <p>build your profile</p>
      <div className="form-top">
        <div className="form-left">
          <div className="form-name">
            <p>Name</p>
          </div>
          <div className="form-style">
            <p>Style</p>
          </div>
          <div className="form-gym">
            <p>Home Gym</p>
          </div>
          <div className="form-contact">
            <p>Phone Number</p>
          </div>
        </div>
        <div className="form-right">
          <p>Message</p>
        </div>
      </div>
      <div className="form-bottom">
        <button className="post-button">Post!</button>
      </div>
    </div>
  );
};

export default BelayForm;
