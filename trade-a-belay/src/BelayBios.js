import NewBio from "./NewBio";
import StaticBios from "./StaticBios";

export default function BelayBios({ deleteBio, bios }) {
  return (
    <div className="bios">
      <div className="outer-dots">
        <div className="inner-dots">
          <div className="upper">
            <h2>Trade-A-Belay</h2>
            <p>Where climbing partnerships begin</p>
          </div>
          <div className="lower">
            <StaticBios />
            {bios.length === 0 && ""}
            {bios.map((bio) => {
              return <NewBio {...bio} key={bio.id} deleteBio={deleteBio} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
