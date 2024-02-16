import { BrowserRouter as Router, Link } from "react-router-dom";
export default function List() {
  return (
    <div>
      <ul style={{ display: "flex", gap: "1.3rem", listStyle: "none" }}>
        <Router>
          <Link className="link" to="/">
            <li>HOME</li>
          </Link>
          <Link className="link" to="/">
            <li>TV Shows</li>
          </Link>
          <Link className="link" to="/">
            <li>Movies</li>
          </Link>
          <Link className="link" to="/">
            <li>New & Popular</li>
          </Link>
          <Link className="link" to="/">
            <li>My List</li>
          </Link>
          <Link className="link" to="/">
            <li>Browse by Languages</li>
          </Link>
        </Router>
      </ul>
    </div>
  );
}
