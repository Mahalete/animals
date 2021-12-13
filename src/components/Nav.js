import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Nav.css";
const Nav = () => {
  return (
    <div className="header">
      <ul className="link_animal">
        <li className="list_nav">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/animals">Animals</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
