import List from "./List";
import Logo from "./Logo";
import NavRight from "./NavRight";

export default function Navbar() {
  return (
    <div className="container">
      <Logo />
      <List />
      <NavRight />
    </div>
  );
}
