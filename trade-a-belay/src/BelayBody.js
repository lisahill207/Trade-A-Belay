import { useState } from "react";
import BelayBios from "./BelayBios";
import BelayForm from "./BelayForm";

export default function BelayBody() {
  const [bios, setBios] = useState([]);

  function addBio(
    nameAnswer,
    styleAnswer,
    gymAnswer,
    phoneAnswer,
    messageAnswer
  ) {
    setBios((currentBios) => {
      return [
        ...currentBios,
        {
          id: crypto.randomUUID(),
          nameAnswer,
          styleAnswer,
          gymAnswer,
          phoneAnswer,
          messageAnswer,
        },
      ];
    });
  }
  function deleteBio(id) {
    setBios((currentBios) => {
      return currentBios.filter((bio) => bio.id !== id);
    });
  }
  return (
    <div className="belay_content">
      <BelayBios bios={bios} deleteBio={deleteBio} />
      <BelayForm addBio={addBio} />
    </div>
  );
}
