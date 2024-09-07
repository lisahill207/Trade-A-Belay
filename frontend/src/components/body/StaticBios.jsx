import React from "react";

import Bio1 from "../../images/belay_bio1.jpg";
import Bio2 from "../../images/belay_bio2.jpg";
import Bio3 from "../../images/belay_bio3.jpg";

const StaticBios = () => {
  return (
    <>
      <div className="bio">
        <img
          src={Bio1}
          className="bio-img"
          alt="Lisa standing in front of a steep rocky hill in Portugal."
        />
        <div className="bio-content">
          <div className="bio-left">
            <div className="bio-name">
              <div className="bio-answer">Lisa</div>
              <div className="name-line"> </div>
            </div>
            <div className="bio-answer">Top Rope</div>
            <div className="bio-answer">Timonium</div>
            <div className="bio-answer">123-456-7890</div>
          </div>
          <div className="bio-right">
            <div className="bio-answer">
              I'm looking for a climbing partner for Tuesday and/or Thursday
              evenings. I'm available between 6-10pm. Lead climbing certified
              but priority is Top Rope. Call or text!
            </div>
          </div>
        </div>
      </div>
      <div className="bio">
        <img
          src={Bio2}
          className="bio-img"
          alt="Female crouching in the mouth of a cave."
        />
        <div className="bio-content">
          <div className="bio-left">
            <div className="bio-name">
              <div className="bio-answer">Kelly</div>
              <div className="name-line"> </div>
            </div>
            <div className="bio-answer">Boulder</div>
            <div className="bio-answer">Hampden</div>
            <div className="bio-answer">234-567-8901</div>
          </div>
          <div className="bio-right">
            <div className="bio-answer">
              I boulder at Hampden before work Monday, Wednesday, and Friday.
              Always looking for more people to join for an early morning sweat
              sesh!
            </div>
          </div>
        </div>
      </div>
      <div className="bio">
        <img
          src={Bio3}
          className="bio-img"
          alt="Female with red hair wearing a backpacking pack and carrying trekking poles."
        />
        <div className="bio-content">
          <div className="bio-left">
            <div className="bio-name">
              <div className="bio-answer">Julie</div>
              <div className="name-line"> </div>
            </div>
            <div className="bio-answer">Top Rope</div>
            <div className="bio-answer">Hampden</div>
            <div className="bio-answer">345-678-9012</div>
          </div>
          <div className="bio-right">
            <div className="bio-message">
              I mostly climb on the weekends at Columbia or Crystal City. Have a
              group of females and we're always open to newcomers! Text me for
              our next climbing time!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticBios;
