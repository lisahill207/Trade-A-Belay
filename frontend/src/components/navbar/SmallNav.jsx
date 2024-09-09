import React from "react";

const SmallNav = () => {
  return (
    <div className="md:hidden sm:hidden lg:hidden w-dvw bg-grey p-2 flex justify-end text-sm pr-6">
      <ul className="list-none font-bold">
        <li className="inline p-3 text-white">ACCOUNT CHANGES</li>
        <li className="inline p-3 text-white">BLOG</li>
        <li className="inline p-3 text-yellow">GIFT CARDS</li>
        <li className="inline p-3 text-yellow">GEAR SHOP</li>
        <li className="inline p-3 text-yellow">WAIVER</li>
        <li className="inline p-3 text-yellow">MEMBERSHIPS & PASSES</li>
      </ul>
    </div>
  );
};

export default SmallNav;
