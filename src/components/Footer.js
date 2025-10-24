import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">Marvel's Blog</h3>

        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <p className="footer-text">
          © {new Date().getFullYear()} Marvel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;