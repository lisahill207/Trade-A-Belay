export default function NewBio({
  deleteBio,
  key,
  id,
  nameAnswer,
  styleAnswer,
  gymAnswer,
  phoneAnswer,
  messageAnswer,
  file,
}) {
  return (
    <div className="bio" key={key}>
      <img src={file} className="bio-img" alt="Not found" />
      <div className="bio-content">
        <div className="bio-name">
          <div className="bio-question">Name:</div>
          <div className="bio-answer">{nameAnswer}</div>
        </div>
        <div className="bio-style">
          <div className="bio-question">Climbing Style:</div>
          <div className="bio-answer">{styleAnswer}</div>
        </div>
        <div className="bio-gym">
          <div className="bio-question">Home Gym:</div>
          <div className="bio-answer">{gymAnswer}</div>
        </div>
        <div className="bio-phone">
          <div className="bio-question">Phone Number:</div>
          <div className="bio-answer">{phoneAnswer}</div>
        </div>
        <div className="bio-message">
          <div className="bio-question">Message:</div>
          <div className="bio-answer">{messageAnswer}</div>
        </div>
      </div>
      <button onClick={() => deleteBio(id)}>Delete Bio</button>
    </div>
  );
}
