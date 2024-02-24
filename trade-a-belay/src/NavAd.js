import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function NavAd() {
  return (
    <div className="nav-ad">
      Short-Term Summer Membership Sale: Destination Summer
      <div className="ad-more">
        More <FontAwesomeIcon icon={faAnglesDown} />
      </div>
    </div>
  );
}
