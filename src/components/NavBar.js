import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import "../styles/NavBar.css";

const NavBar = () => {
  const location = useLocation(); // Use useLocation to get the current pathname

  return (
    <nav className="navbar">
      <div className="navbar-brand">LOGO</div>
      <ul className="nav-links">
        <li>
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              location.pathname === "/skills" ? "active" : ""
            }`}
            to="/skills"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              location.pathname === "/work-experience" ? "active" : ""
            }`}
            to="/work-experience"
          >
            Work Experience
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              location.pathname === "/resume" ? "active" : ""
            }`}
            to="/resume"
          >
            Resume
          </Link>
        </li>
        <li>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/preetikushwaha13/"
            target="_blank"
            rel="noopener noreferrer"
          >
            in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
