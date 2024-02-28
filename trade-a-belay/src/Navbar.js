import NavAd from "./NavAd";
import SmallNav from "./SmallNav";
import LargeNav from "./LargeNav";
import NavMobile from "./NavMobile";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavAd />
      <SmallNav />
      <LargeNav />
      <NavMobile />
    </nav>
  );
}
