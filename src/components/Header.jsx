import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="enlace">BRAVO ARTE</Link>
      <img src="./src/assets/logo.png" alt="Logo" className="header-logo" />
    </header>
  );
}

export default Header;