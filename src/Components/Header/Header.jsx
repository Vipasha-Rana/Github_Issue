import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <nav>
      <Link to="/" className="link">
        <div id="nav-title">Issues Page</div>
      </Link>
    </nav>
  );
}
