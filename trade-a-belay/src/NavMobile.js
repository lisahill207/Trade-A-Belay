import movementLogo from "./Images/movement.png";

export default function NavMobile() {
  return (
    <div className="mobileHeader">
      <div className="mobileHeaderLeft">
        <div className="mobileLogo">
          <img
            src={movementLogo}
            className="movementMobileLogo"
            alt="Logo for Movement GYms"
          />
        </div>
      </div>
      <div className="mobileHeaderRight">
        <div className="mobileHamburger">
          <div className="mobile-menu">
            <label className="hamburger-menu">
              <input type="checkbox" id="hamburger-menu" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
