import React, { useState } from "react";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [isNavbarMobile, setIsNavbarMobile] = useState(false);

  const toggleMobileNav = () => {
    setIsNavbarMobile(!isNavbarMobile);
  };

  const closeMobileNav = () => {
    setIsNavbarMobile(false);
  };

  return (
    <div>

      <header
        id="header"
        className="fixed-top d-flex align-items-center"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <a href="#">
              <img
                src={logo}
                alt=""
                style={{ height: "200px", width: "auto", color: "white" }}
              />
            </a>
          </h1>

          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              isNavbarMobile ? "navbar-mobile" : ""
            }`}
          >
            <ul>
              <li>
                <a
                  className="nav-link scrollto active"
                  href="#hero"
                  onClick={closeMobileNav}
                  style={{fontFamily:"poopins"}}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#about"
                  onClick={closeMobileNav}
                  style={{fontFamily:"poopins"}}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#services"
                  onClick={closeMobileNav}
                  style={{fontFamily:"poopins"}}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#contact"
                  onClick={closeMobileNav}
                  style={{fontFamily:"poopins"}}
                >
                  Contact
                </a>
              </li>
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={toggleMobileNav}
            ></i>
          </nav>

          <a  className="book-a-table-btn scrollto d-none d-lg-flex"  style={{fontFamily:"poopins"}}>
            Get Started
          </a>
        </div>
      </header>

      <section id="hero" class="d-flex align-items-center mt-0">
        <div
          class="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1 style={{fontFamily:"poopins"}}>
                Welcome to <span>Visko E-Serve</span>
              </h1>
              <p className="fs-5" style={{fontFamily:"poopins"}}>
                Redefining communication through ultra-modern tech with the
                vision to transform messaging and make it seamless and
                intuitive. We aim to equip individuals and businesses with
                powerful and secure communication platforms.
              </p>

              <div class="btns">
                <a  class="btn-menu animated fadeInUp scrollto" style={{fontFamily:"poopins"}}>
                  Get Start
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Navbar;
