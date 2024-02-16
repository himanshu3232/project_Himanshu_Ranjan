import { Link, BrowserRouter as Router } from "react-router-dom";
export default function Logo() {
  return (
    <div>
      <Router>
        <Link className="link" to="/">
          <h3 className="logo-text">CODERFLIX</h3>
        </Link>
      </Router>
    </div>
  );
}
