import React from "react";

const NewBio = ({
  deleteBio,
  key,
  id,
  nameAnswer,
  styleAnswer,
  gymAnswer,
  phoneAnswer,
  messageAnswer,
  file,
}) => {
  return (
    <div className="bio" key={key}>
      <img src={file} className="bio-img" alt="Not found" />
      <div className="bio-content">
        <div className="bio-left">
          <div className="bio-name">
            <div className="bio-answer">{nameAnswer}</div>
            <div className="name-line"> </div>
          </div>
          <div className="bio-style">
            <div className="bio-answer">{styleAnswer}</div>
          </div>
          <div className="bio-gym">
            <div className="bio-answer">{gymAnswer}</div>
          </div>
          <div className="bio-phone">
            <div className="bio-answer">{phoneAnswer}</div>
          </div>
        </div>
        <div className="bio-right">
          <div className="bio-message">
            <div className="bio-answer">{messageAnswer}</div>
          </div>
        </div>
      </div>
      <button className="delete-button" onClick={() => deleteBio(id)}>
        Delete Bio
      </button>
    </div>
  );
};

export default NewBio;
