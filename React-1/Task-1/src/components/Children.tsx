import { BrowserRouter, Link } from "react-router-dom";

export default function Children() {
  return (
    <div>
      <BrowserRouter>
        <Link className="link" to="/">
          Children
        </Link>
      </BrowserRouter>
    </div>
  );
}
