export default function BelayForm() {
  return (
    <div className="belay_form">
      <form>
        <fieldset className="belay_form_fieldset">
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
          <button className="movement_post">Post!</button>
        </fieldset>
      </form>
    </div>
  );
}
