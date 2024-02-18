import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function LargeNav() {
  return (
    <div className="large_nav">
      <div className="logo_nav"></div>
      <ul className="large_nav_list">
        <li className="large_nav_item">WHY US</li>
        <li className="large_nav_item">FIRST VISIT</li>
        <li className="large_nav_item">|</li>
        <li className="large_nav_item">
          GYM <FontAwesomeIcon icon={faHouse} />
        </li>
        <li className="large_nav_item">CALENDAR</li>
        <li className="large_nav_item">CLIMBING</li>
        <li className="large_nav_item">YOGA</li>
        <li className="large_nav_item">FITNESS</li>
      </ul>
      <div className="large_nav_location">
        <FontAwesomeIcon icon={faLocationDot} />
        TIMONIUM
      </div>
    </div>
  );
}
