import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between font-bold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
