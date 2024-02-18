import Bio1 from "./Images/belay_bio1.jpeg";
import Bio2 from "./Images/belay_bio2.jpg";
import Bio3 from "./Images/belay_bio3.jpg";

export default function () {
  return (
    <>
      <div className="bio1">
        <img
          src={Bio1}
          className="bio_img"
          alt="Lisa standing in front of a steep rocky hill in Portugal."
        />
        <div className="bio_content">
          <div className="bio_name">
            <div className="bio_question">Name:</div>
            <div className="bio_answer">Lisa</div>
          </div>
          <div className="bio_style">
            <div className="bio_question">Preferred Climbing Style:</div>
            <div className="bio_answer">Top Rope</div>
          </div>
          <div className="bio_gym">
            <div className="bio_question">Home Gym:</div>
            <div className="bio_answer">Timonium</div>
          </div>
          <div className="bio_phone">
            <div className="bio_question">Phone Number:</div>
            <div className="bio_answer">XXX-XXX-XXXX</div>
          </div>
          <div className="bio_message">
            <div className="bio_question">Message:</div>
            <div className="bio_answer">
              I'm looking for a climbing partner for Tuesday and/or Thursday
              evenings. I'm available between 6-10pm. Lead climbing certified
              but priority is Top Rope. Call or text!
            </div>
          </div>
        </div>
      </div>
      <div className="bio2">
        <img
          src={Bio2}
          className="bio_img"
          alt="Female crouching in the mouth of a cave."
        />
        <div className="bio_content">
          <div className="bio_name">
            <div className="bio_question">Name:</div>
            <div className="bio_answer">Kelly</div>
          </div>
          <div className="bio_style">
            <div className="bio_question">Preferred Climbing Style:</div>
            <div className="bio_answer">Boulder</div>
          </div>
          <div className="bio_gym">
            <div className="bio_question">Home Gym:</div>
            <div className="bio_answer">Hampden</div>
          </div>
          <div className="bio_phone">
            <div className="bio_question">Phone Number:</div>
            <div className="bio_answer">XXX-XXX-XXXX</div>
          </div>
          <div className="bio_message">
            <div className="bio_question">Message:</div>
            <div className="bio_answer">
              I boulder at Hampden before work Monday, Wednesday, and Friday.
              Always looking for more people to join for an early morning sweat
              sesh!
            </div>
          </div>
        </div>
      </div>
      <div className="bio3">
        <img
          src={Bio3}
          className="bio_img"
          alt="Female with red hair wearing a backpacking pack and carrying trekking poles."
        />
        <div className="bio_content">
          <div className="bio_name">
            <div className="bio_question">Name:</div>
            <div className="bio_answer">Julie</div>
          </div>
          <div className="bio_style">
            <div className="bio_question">Preferred Climbing Style:</div>
            <div className="bio_answer">Top Rope</div>
          </div>
          <div className="bio_gym">
            <div className="bio_question">Home Gym:</div>
            <div className="bio_answer">Hampden</div>
          </div>
          <div className="bio_phone">
            <div className="bio_question">Phone Number:</div>
            <div className="bio_answer">XXX-XXX-XXXX</div>
          </div>
          <div className="bio_message">
            <div className="bio_question">Message:</div>
            <div className="bio_answer">
              I mostly climb on the weekends at Columbia or Crystal City. Have a
              group of females and we're always open to newcomers! Text me for
              our next climbing time!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
