import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://www.inixindo.id">
          <img
            src="https://i.ibb.co/ZKrLMZw/React-Inixindo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item" href="/">
            Home
          </Link>
          <Link to="/products" className="navbar-item">
            Products
          </Link>
          <Link to="/categories" className="navbar-item">
            Categories
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
