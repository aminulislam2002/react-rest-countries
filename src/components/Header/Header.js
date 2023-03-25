import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/countries">Countries</a>
        <a href="/country">Country</a>
        <a href="/details">Details</a>
      </nav>
    </div>
  );
};

export default Header;
