import BelayBios from "./BelayBios.jsx";
import BelayForm from "./BelayForm.jsx";

import React from "react";
import { useState } from "react";

const Body = () => {
  const [bios, setBios] = useState([]);

  function addBio(
    nameAnswer,
    styleAnswer,
    gymAnswer,
    phoneAnswer,
    messageAnswer,
    file
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
          file,
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
    <div className="belay-content">
      <BelayBios bios={bios} deleteBio={deleteBio} />
      <BelayForm addBio={addBio} />
    </div>
  );
};

export default Body;
