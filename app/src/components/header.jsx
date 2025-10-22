import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Header() {
  useEffect(() => {
    // Fügt beim Scrollen eine Klasse hinzu, damit sich die Navbar färbt
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container">
          {/* 🔹 Logo / Brand */}
          <a className="navbar-brand fw-bold" href="#home">
            MyBrand
          </a>

          {/* 🔹 Toggle Button (mobile) */}
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

          {/* 🔹 Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Über uns
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Leistungen
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Projekte
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
