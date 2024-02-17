export default function BelayBody() {
  return (
    <div class="belay_body">
      <div class="belay_bios">
        <div class="belay_bio1">
          <img
            src="Images/belay_bio1.jpeg"
            class="movement_bio_img"
            alt="Lisa standing in front of a steep rocky hill in Portugal."
          />
          <div class="belay_bio_content">
            <div class="belay_bio_name">
              <div class="belay_bio_question">Name:</div>
              <div class="belay_bio_answer">Lisa</div>
            </div>
            <div class="belay_bio_style">
              <div class="belay_bio_question">Preferred Climbing Style:</div>
              <div class="belay_bio_answer">Top Rope</div>
            </div>
            <div class="belay_bio_gym">
              <div class="belay_bio_question">Home Gym:</div>
              <div class="belay_bio_answer">Timonium</div>
            </div>
            <div class="belay_bio_phone">
              <div class="belay_bio_question">Phone Number:</div>
              <div class="belay_bio_answer">XXX-XXX-XXXX</div>
            </div>
            <div class="belay_bio_message">
              <div class="belay_bio_question">Message:</div>
              <div class="belay_bio_answer">
                I'm looking for a climbing partner for Tuesday and/or Thursday
                evenings. I'm available between 6-10pm. Lead climbing certified
                but priority is Top Rope. Call or text!
              </div>
            </div>
          </div>
        </div>
        <div class="belay_bio2">
          <img
            src="Images/belay_bio2.jpg"
            class="movement_bio_img"
            alt="Female crouching in the mouth of a cave."
          />
          <div class="belay_bio_content">
            <div class="belay_bio_name">
              <div class="belay_bio_question">Name:</div>
              <div class="belay_bio_answer">Kelly</div>
            </div>
            <div class="belay_bio_style">
              <div class="belay_bio_question">Preferred Climbing Style:</div>
              <div class="belay_bio_answer">Boulder</div>
            </div>
            <div class="belay_bio_gym">
              <div class="belay_bio_question">Home Gym:</div>
              <div class="belay_bio_answer">Hampden</div>
            </div>
            <div class="belay_bio_phone">
              <div class="belay_bio_question">Phone Number:</div>
              <div class="belay_bio_answer">XXX-XXX-XXXX</div>
            </div>
            <div class="belay_bio_message">
              <div class="belay_bio_question">Message:</div>
              <div class="belay_bio_answer">
                I boulder at Hampden before work Monday, Wednesday, and Friday.
                Always looking for more people to join for an early morning
                sweat sesh!
              </div>
            </div>
          </div>
        </div>
        <div class="belay_bio3">
          <img
            src="Images/belay_bio3.jpg"
            class="movement_bio_img"
            alt="Female with red hair wearing a backpacking pack and carrying trekking poles."
          />
          <div class="belay_bio_content">
            <div class="belay_bio_name">
              <div class="belay_bio_question">Name:</div>
              <div class="belay_bio_answer">Julie</div>
            </div>
            <div class="belay_bio_style">
              <div class="belay_bio_question">Preferred Climbing Style:</div>
              <div class="belay_bio_answer">Top Rope</div>
            </div>
            <div class="belay_bio_gym">
              <div class="belay_bio_question">Home Gym:</div>
              <div class="belay_bio_answer">Hampden</div>
            </div>
            <div class="belay_bio_phone">
              <div class="belay_bio_question">Phone Number:</div>
              <div class="belay_bio_answer">XXX-XXX-XXXX</div>
            </div>
            <div class="belay_bio_message">
              <div class="belay_bio_question">Message:</div>
              <div class="belay_bio_answer">
                I mostly climb on the weekends at Columbia or Crystal City. Have
                a group of females and we're always open to newcomers! Text me
                for our next climbing time!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="belay_form">
        <form>
          <fieldset class="belay_form_fieldset">
            <legend>Build Your Profile</legend>
            <label for="movement_name">First & Last Name</label>
            <input
              type="text"
              id="movement_name"
              name="movement_name"
              tabindex="1"
              placeholder="First Last"
              required
              aria-required="true"
            />
            <br />
            <label for="movement_style">Climbing Style</label>
            <select id="movement_style" name="movement_style" tabindex="3">
              <option value="boulder">Boulder</option>
              <option value="topRope">Top Rope</option>
              <option value="lead">Lead</option>
            </select>
            <br />
            <label for="movement_gym">Home Gym</label>
            <select id="movement_gym" name="movement_gym" tabindex="4">
              <option value="timonium">Timonium</option>
              <option value="hampden">Hampden</option>
              <option value="columbia">Columbia</option>
              <option value="crystalCity">Crystal City</option>
              <option value="rockville">Rockville</option>
            </select>
            <br />
            <label for="movement_contact">Phone Number</label>
            <input
              type="tel"
              id="movement_contact"
              name="movement_contact"
              tabindex="5"
              placeholder="XXX-XXX-XXXX"
              required
              aria-required="true"
            />
            <br />
            <label for="movement_message">Message</label>
            <textarea
              id="movement_message"
              name="movement_message"
              rows="4"
              cols="50"
              placeholder="Introduce yourself..."
              tabindex="6"
              required
              aria-required="true"
            ></textarea>
            <br />
            <button class="movement_post">Post!</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
