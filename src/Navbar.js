import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Brand */}
      <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
        Marvel's Blog
      </Link>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Dropdown links */}
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;