import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">🏥 HealthAI</div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/tracker" className={location.pathname === "/tracker" ? "active" : ""}>
          Tracker
        </Link>
        <Link to="/history" className={location.pathname === "/history" ? "active" : ""}>
          History
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
