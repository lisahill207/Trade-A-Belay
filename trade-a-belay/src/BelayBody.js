import { useState } from "react";
import BelayBios from "./BelayBios";
import BelayForm from "./BelayForm";

export default function BelayBody() {
  const [bios, setBios] = useState([]);

  function addBio() {
    setBios((currentBios) => {
      return [...currentBios, { id: crypto.randomUUID() }];
    });
  }
  function deleteBio(bioId) {
    setBios((currentBios) => {
      return currentBios.filter((bio) => bio.id !== bioId);
    });
  }
  return (
    <div className="belay_content">
      <BelayBios deleteBio={deleteBio} bios={bios} />
      <BelayForm addBio={addBio} bios={bios} />
    </div>
  );
}
