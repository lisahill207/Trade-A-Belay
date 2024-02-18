import NewBio from "./NewBio";
import StaticBios from "./StaticBios";

export default function BelayBios({ deleteBio, bios }) {
  return (
    <div className="bios">
      <StaticBios />
      {bios.length === 0 && ""}
      {bios.map((bio) => {
        return <NewBio deleteBio={deleteBio} />;
      })}
    </div>
  );
}
