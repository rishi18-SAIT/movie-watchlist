import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left side: Watchlist title */}
        <div className="logo">
          <h1>🎬 Watchlist</h1>
        </div>

        {/* Right side: Navigation links */}
        <nav className="nav-links">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
          <NavLink to="/watchlist" className="nav-link">
            Watchlist
          </NavLink>
          <NavLink to="/watched" className="nav-link">
            Watched
          </NavLink>
          <NavLink to="/add" className="nav-link add">
            + Add Movie
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
