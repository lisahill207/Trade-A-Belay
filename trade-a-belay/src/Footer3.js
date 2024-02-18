import FooterLogo from "./Images/movementFooter.png";
export default function Footer3() {
  return (
    <div className="footer_3">
      <div className="copy">Movement &copy; 2023</div>
      <div className="logo_vertical">
        <img src={FooterLogo} alt="Movement gym vertical logo" />
      </div>
    </div>
  );
}
