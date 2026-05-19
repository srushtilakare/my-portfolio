import "../styles/navbar.css";

import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <Link
        to="/"
        className="nav-logo"
      >
        Portfolio
      </Link>

      <ul className="nav-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/skills">
            Skills
          </Link>
        </li>

        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>

        <li>
          <Link to="/research">
            Research
          </Link>
        </li>

        <li>
          <Link to="/certificates">
            Certificates
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

        

      </ul>

    </nav>
  );
}

export default Navbar;
