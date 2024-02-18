import Children from "./Children";
import Profile from "./Profile";
import Search from "./Search";
import Notification from "./Notification";

export default function NavRight() {
  return (
    <div className="nav-right">
      <Search />
      <Children />
      <Notification />
      <Profile />
    </div>
  );
}
