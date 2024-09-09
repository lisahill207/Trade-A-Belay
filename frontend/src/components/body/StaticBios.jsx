import React from "react";

import Bio1 from "../../images/belay_bio1.jpg";
import Bio2 from "../../images/belay_bio2.jpg";
import Bio3 from "../../images/belay_bio3.jpg";

const StaticBios = () => {
  return (
    <>
      <div className="card m-2 bg-dark-blue max-w-96 shadow-xl">
        <figure className="w-96 h-400">
          <img
            className="object-cover"
            src={Bio1}
            alt="Lisa standing in front of a steep rocky hill in Portugal."
          />
        </figure>
        <div className="card-body text-wrap">
          <h2 className="card-title">Lisa</h2>
          <h3>Top Rope, Timonium</h3>
          <h3>123-456-7890</h3>
          <p>
            I'm looking for a climbing partner for Tuesday and/or Thursday
            evenings. I'm available between 6-10pm. Lead climbing certified but
            priority is Top Rope. Call or text!
          </p>
        </div>
      </div>
      <div className="card m-2 bg-dark-blue max-w-96 shadow-xl">
        <figure className="w-96 h-400">
          <img
            className="object-cover"
            src={Bio2}
            alt="Female crouching in the mouth of a cave."
          />
        </figure>
        <div className="card-body text-wrap">
          <h2 className="card-title">Kelly</h2>
          <h3>Boulder, Hampden</h3>
          <h3>234-567-8901</h3>
          <p>
            I boulder at Hampden before work Monday, Wednesday, and Friday.
            Always looking for more people to join for an early morning sweat
            sesh!
          </p>
        </div>
      </div>
      <div className="card m-2 bg-dark-blue max-w-96 shadow-xl">
        <figure className="w-96 h-400">
          <img
            className="object-cover"
            src={Bio3}
            alt="Julie wearing a backpacking pack and carrying trekking poles."
          />
        </figure>
        <div className="card-body text-wrap">
          <h2 className="card-title">Julie</h2>
          <h3>Top Rope, Columbia</h3>
          <h3>345-678-9012</h3>
          <p>
            I mostly climb on the weekends at Columbia or Crystal City. Have a
            group of females and we're always open to newcomers! Text me for our
            next climbing time!
          </p>
        </div>
      </div>
    </>
  );
};

export default StaticBios;
