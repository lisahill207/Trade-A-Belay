import React from "react";

const Footer2 = () => {
  return (
    <div className="m-3 w-95dvw">
      <div className="flex justify-start text-white">
        <ul className="border-r-2 px-3" id="footer-box1-list">
          <li className="list-none">WHY US</li>
          <li className="list-none">FIRST VISIT</li>
          <li className="list-none">MEDIA CENTER</li>
        </ul>
        <ul className="border-r-2 px-3" id="footer-box2-list">
          <li className="list-none">ACCOUNT</li>
          <li className="list-none">BLOG</li>
          <li className="list-none">WAIVER</li>
          <li className="list-none">MEMBERSHIP</li>
        </ul>
        <ul className="border-r-2 px-3" id="footer-box3-list">
          <li className="list-none">CONTACT US</li>
          <li className="list-none">CAREERS</li>
          <li className="list-none">FAQS</li>
        </ul>
        <ul className="px-3" id="footer-box4-list">
          <li className="list-none">GIFT CARDS</li>
          <li className="list-none">PRIVACY POLICY</li>
          <li className="list-none">OPT OUT</li>
          <li className="list-none">YOUTH PROTECTION COMMITTEE</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer2;
