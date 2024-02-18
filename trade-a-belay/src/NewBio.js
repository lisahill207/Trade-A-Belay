export default function NewBio({
  deleteBio,
  key,
  id,
  nameAnswer,
  styleAnswer,
  gymAnswer,
  phoneAnswer,
  messageAnswer,
}) {
  return (
    <div className="bio" key={key}>
      <div className="bio_content">
        <div className="bio_name">
          <div className="bio_question">Name:</div>
          <div className="bio_answer">{nameAnswer}</div>
        </div>
        <div className="bio_style">
          <div className="bio_question">Climbing Style:</div>
          <div className="bio_answer">{styleAnswer}</div>
        </div>
        <div className="bio_gym">
          <div className="bio_question">Home Gym:</div>
          <div className="bio_answer">{gymAnswer}</div>
        </div>
        <div className="bio_phone">
          <div className="bio_question">Phone Number:</div>
          <div className="bio_answer">{phoneAnswer}</div>
        </div>
        <div className="bio_message">
          <div className="bio_question">Message:</div>
          <div className="bio_answer">{messageAnswer}</div>
        </div>
      </div>
      <button onClick={() => deleteBio(id)}>Delete Bio</button>
    </div>
  );
}
