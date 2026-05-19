import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <Link
        to="/"
        className="nav-logo"
      >
        Portfolio
      </Link>

      {/* HAMBURGER MENU */}

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">
            Home
          </Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/skills">
            Skills
          </Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/projects">
            Projects
          </Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/research">
            Research
          </Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/certificates">
            Certificates
          </Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/contact">
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;