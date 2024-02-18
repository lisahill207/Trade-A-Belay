import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function BelayForm({ addBio }) {
  const [nameAnswer, setNameAnswer] = useState("");
  const [styleAnswer, setStyleAnswer] = useState("");
  const [gymAnswer, setGymAnswer] = useState("");
  const [phoneAnswer, setPhoneAnswer] = useState("");
  const [messageAnswer, setMessageAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (nameAnswer === "") return;
    if (styleAnswer === "") return;
    if (gymAnswer === "") return;
    if (phoneAnswer === "") return;
    if (messageAnswer === "") return;

    addBio(nameAnswer, styleAnswer, gymAnswer, phoneAnswer, messageAnswer);

    setNameAnswer("");
    setStyleAnswer("");
    setGymAnswer("");
    setPhoneAnswer("");
    setMessageAnswer("");
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset className="form_fieldset">
          <legend>Build Your Profile</legend>
          <label htmlFor="name">First & Last Name</label>
          <input
            value={nameAnswer}
            onChange={(e) => setNameAnswer(e.target.value)}
            type="text"
            id="name"
            placeholder="First Last"
            required
            aria-required="true"
            tabIndex="1"
          />
          <br />
          <label htmlFor="style">Climbing Style</label>
          <select
            value={styleAnswer}
            onChange={(e) => setStyleAnswer(e.target.value)}
            defaultValue=""
            id="style"
            name="style"
            tabindex="2"
          >
            <option value="" disabled>
              Select a style...
            </option>
            <option value="boulder">Boulder</option>
            <option value="topRope">Top Rope</option>
            <option value="lead">Lead</option>
          </select>
          <br />
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
              Select a home gym...
            </option>
            <option value="timonium">Timonium</option>
            <option value="hampden">Hampden</option>
            <option value="columbia">Columbia</option>
            <option value="crystalCity">Crystal City</option>
            <option value="rockville">Rockville</option>
          </select>
          <br />
          <label htmlFor="contact">Phone Number</label>
          <input
            value={phoneAnswer}
            onChange={(e) => setPhoneAnswer(e.target.value)}
            type="tel"
            id="contact"
            name="contact"
            tabindex="4"
            placeholder="XXX-XXX-XXXX"
            required
            aria-required="true"
          />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            value={messageAnswer}
            onChange={(e) => setMessageAnswer(e.target.value)}
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Introduce yourself..."
            tabindex="5"
            required
            aria-required="true"
          ></textarea>
          <label htmlFor="input-file" id="drop-area">
            <input type="file" accept="image/*" id="input-file" hidden />
            <div id="img-view">
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
              <p>Drag and drop or click here to upload image</p>
            </div>
          </label>
          <br />
          <button className="post">Post!</button>
        </fieldset>
      </form>
    </div>
  );
}
