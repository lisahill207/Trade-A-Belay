import NewBio from "./NewBio";
import StaticBios from "./StaticBios";

export default function BelayBios({ deleteBio, bios }) {
  return (
    <div className="bios">
      <div className="outer-dots">
        <div className="inner-dots">
          <StaticBios />
          {bios.length === 0 && ""}
          {bios.map((bio) => {
            return <NewBio {...bio} key={bio.id} deleteBio={deleteBio} />;
          })}
        </div>
      </div>
    </div>
  );
}
