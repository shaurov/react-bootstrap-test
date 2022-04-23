import React, { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light py-3 py-lg-2"
      style={{ minHeight: "4rem" }}
    >
      <div className="container">
        <div className="navbar-brand py-1 py-lg-0">
          <Link to="/">
            <h1 style={{ marginBottom: "0rem" }}>Kiteslab Experiment</h1>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            "collapse" + (menuOpen ? " show" : "") + " navbar-collapse"
          }
        >
          <div
            className="navbar-nav ms-auto"
            style={{
              // marginRight: "-0.5rem",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
