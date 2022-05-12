import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ backgroundColor: "#F1F3FF" }}
    >
      <div className="container">
        <button
          type="button"
          className="btn btn-nav1 me-0 ms-0"
        >
          <span style={{ visibility: "hidden" }}>Register</span>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="link nav-link me-4" href="#halaman-2">
              Our Services
            </a>
            <a className="link nav-link me-4" href="#halaman-3">
              Why Us
            </a>
            <a className="link nav-link me-4" href="#halaman-4">
              Testimonial
            </a>
            <a className="link nav-link me-4" href="#halaman-6">
              FAQ
            </a>
            <button type="button" className="btn btn-nav me-0">
              <strong>Register</strong>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
