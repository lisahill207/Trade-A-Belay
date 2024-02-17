import Footer1 from "./Footer1";

export default function Footer() {
  return (
    <footer className="movement_footer_main">
      <div className="movement_footer">
        <Footer1 />
        <div className="movement_footer_2">
          <ul className="footer_box_list" id="footer_box1_list">
            <li className="footer_box_item">WHY US</li>
            <li className="footer_box_item">FIRST VISIT</li>
            <li className="footer_box_item">MEDIA CENTER</li>
          </ul>
          <ul className="footer_box_list" id="footer_box2_list">
            <li className="footer_box_item">ACCOUNT</li>
            <li className="footer_box_item">BLOG</li>
            <li className="footer_box_item">WAIVER</li>
            <li className="footer_box_item">MEMBERSHIP</li>
          </ul>
          <ul className="footer_box_list" id="footer_box3_list">
            <li className="footer_box_item">CONTACT US</li>
            <li className="footer_box_item">CAREERS</li>
            <li className="footer_box_item">FAQS</li>
          </ul>
          <ul className="footer_box_list" id="footer_box4_list">
            <li className="footer_box_item">GIFT CARDS</li>
            <li className="footer_box_item">PRIVACY POLICY</li>
            <li className="footer_box_item">OPT OUT</li>
            <li className="footer_box_item">YOUTH PROTECTION COMMITTEE</li>
          </ul>
        </div>
        <div className="movement_footer_3">
          <div className="movement_copy">Movement &copy; 2023</div>
          <div className="movement_logo_vertical">
            <img
              src="Images/movementFooter.png"
              alt="Movement gym vertical logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
