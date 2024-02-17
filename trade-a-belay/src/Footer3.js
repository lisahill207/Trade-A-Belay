import FooterLogo from "./Images/movementFooter.png";
export default function Footer3() {
  return (
    <div className="movement_footer_3">
      <div className="movement_copy">Movement &copy; 2023</div>
      <div className="movement_logo_vertical">
        <img src={FooterLogo} alt="Movement gym vertical logo" />
      </div>
    </div>
  );
}
