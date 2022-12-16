import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-container p-3 ps-5 pe-5 fixed-top">
      <div class="container-fluid d-flex flex-row justify-content-around">
        <a
          class="navbar-brand d-flex flex-row justify-content-start align-content-items-center"
          href="/"
        >
          <img
            src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/logo.png"
            alt="Navbar Logo img"
            class="navbar-logo"
          />
          <h4 class = "ps-2 mt-2">SoftwareM4</h4>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
          <div className="navbar-icon-container d-flex">
            <a href="/" class = 'rounded-3 navbar-icon'><i class="bi bi-facebook"></i></a>
            <a href="/" class = 'rounded-3 navbar-icon'><i class="bi bi-twitter"></i></a>
            <a href="/" class = 'rounded-3 navbar-icon'><i class="bi bi-instagram"></i></a>
        </div>
        </div>
       
      </div>
    </nav>
  );
};
