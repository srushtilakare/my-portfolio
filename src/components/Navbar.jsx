import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        Srushti<span>AI</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Research</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;