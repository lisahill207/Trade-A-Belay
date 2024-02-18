import NavAd from "./NavAd";
import SmallNav from "./SmallNav";
import LargeNav from "./LargeNav";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavAd />
      <SmallNav />
      <LargeNav />
    </nav>
  );
}
