import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function FooterSocial() {
  return (
    <div className="footer-social">
      <FontAwesomeIcon icon={faMeta} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faYoutube} />
    </div>
  );
}
