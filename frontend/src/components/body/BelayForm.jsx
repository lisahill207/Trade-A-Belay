import React from "react";
import { useState } from "react";

const BelayForm = ({ addBio }) => {
  const [nameAnswer, setNameAnswer] = useState("");
  const [styleAnswer, setStyleAnswer] = useState("");
  const [gymAnswer, setGymAnswer] = useState("");
  const [phoneAnswer, setPhoneAnswer] = useState("");
  const [messageAnswer, setMessageAnswer] = useState("");
  const [file, setFile] = useState();

  function handlePhoto(e) {
    e.preventDefault();
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nameAnswer === "") return;
    if (styleAnswer === "") return;
    if (gymAnswer === "") return;
    if (phoneAnswer === "") return;
    if (messageAnswer === "") return;
    if (file === "") return;

    addBio(
      nameAnswer,
      styleAnswer,
      gymAnswer,
      phoneAnswer,
      messageAnswer,
      file
    );

    setNameAnswer("");
    setStyleAnswer("");
    setGymAnswer("");
    setPhoneAnswer("");
    setMessageAnswer("");
    setFile("");
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <p>build your profile</p>
        <div className="form-top">
          <div className="form-left">
            <div className="form-name">
              <label htmlFor="name">Name</label>
              <input
                value={nameAnswer}
                onChange={(e) => setNameAnswer(e.target.value)}
                type="text"
                id="name"
                required
                aria-required="true"
                tabIndex="1"
              />
            </div>
            <div className="form-style">
              <label htmlFor="style">Climbing Style</label>
              <select
                value={styleAnswer}
                onChange={(e) => setStyleAnswer(e.target.value)}
                defaultValue=""
                id="style"
                tabindex="2"
              >
                <option value="" disabled>
                  Select one...
                </option>
                <option value="boulder">Boulder</option>
                <option value="topRope">Top Rope</option>
                <option value="lead">Lead</option>
              </select>
            </div>
            <div className="form-gym">
              <label htmlFor="gym">Home Gym</label>
              <select
                value={gymAnswer}
                onChange={(e) => setGymAnswer(e.target.value)}
                defaultValue=""
                id="gym"
                name="gym"
                tabindex="3"
                required
                aria-required="true"
              >
                <option value="" disabled>
                  Select one...
                </option>
                <option value="timonium">Timonium</option>
                <option value="hampden">Hampden</option>
                <option value="columbia">Columbia</option>
                <option value="crystalCity">Crystal City</option>
                <option value="rockville">Rockville</option>
              </select>
            </div>
            <div className="form-contact">
              <label htmlFor="contact">Phone Number</label>
              <input
                value={phoneAnswer}
                onChange={(e) => setPhoneAnswer(e.target.value)}
                type="tel"
                id="contact"
                name="contact"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                tabindex="4"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div className="form-right">
            <label htmlFor="message">Message</label>
            <textarea
              value={messageAnswer}
              onChange={(e) => setMessageAnswer(e.target.value)}
              id="message"
              name="message"
              rows="4"
              tabindex="5"
              required
              aria-required="true"
            ></textarea>
          </div>
        </div>
        <div className="form-bottom">
          <div className="button-wrap">
            <label class="upload-button" htmlFor="input-file">
              Upload Photo
            </label>
            <input
              onChange={handlePhoto}
              type="file"
              accept="image/*"
              id="input-file"
              tabIndex="6"
              required
            />
          </div>
          <button className="post-button">Post!</button>
        </div>
      </form>
    </div>
  );
};

export default BelayForm;
