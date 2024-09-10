import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const FooterSocial = () => {
  return (
    <div className="self-center text-3xl flex flex-row text-yellow">
      <FontAwesomeIcon icon={faMeta} className="p-2" />
      <FontAwesomeIcon icon={faInstagram} className="p-2" />
      <FontAwesomeIcon icon={faYoutube} className="p-2" />
    </div>
  );
};

export default FooterSocial;
