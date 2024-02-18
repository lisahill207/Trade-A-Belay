export default function BelayForm({ addBio }) {
  function handleSubmit(e) {
    e.preventDefault();
    addBio();
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset className="form_fieldset">
          <legend>Build Your Profile</legend>
          <label htmlFor="name">First & Last Name</label>
          <input type="text" id="name" tabindex="1" placeholder="First Last" />
          <br />
          <label htmlFor="style">Climbing Style</label>
          <select id="style" name="style" tabindex="3">
            <option value="boulder">Boulder</option>
            <option value="topRope">Top Rope</option>
            <option value="lead">Lead</option>
          </select>
          <br />
          <label htmlFor="gym">Home Gym</label>
          <select id="gym" name="gym" tabindex="4">
            <option value="timonium">Timonium</option>
            <option value="hampden">Hampden</option>
            <option value="columbia">Columbia</option>
            <option value="crystalCity">Crystal City</option>
            <option value="rockville">Rockville</option>
          </select>
          <br />
          <label htmlFor="contact">Phone Number</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            tabindex="5"
            placeholder="XXX-XXX-XXXX"
            required
            aria-required="true"
          />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Introduce yourself..."
            tabindex="6"
            required
            aria-required="true"
          ></textarea>
          <br />
          <button className="post">Post!</button>
        </fieldset>
      </form>
    </div>
  );
}
