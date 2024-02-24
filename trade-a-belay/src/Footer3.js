import FooterLogo from "./Images/movementFooter.png";
export default function Footer3() {
  return (
    <div className="footer-3">
      <div className="copy">Movement &copy; 2023</div>
      <div className="logo-vertical">
        <img src={FooterLogo} alt="Movement gym vertical logo" />
      </div>
    </div>
  );
}
