import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ paddingLeft: "30px" }}
    >
      <a className="navbar-brand" href="#">
        Bus-Scheduler
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              DashBoard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Add Routes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Add Driver
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
