import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useEffect, useState } from "react";

function NavBar() {
  const { user } = useAuth();
  const [mode,setMode] = useState("light");
  const mainHtml = document.getElementsByTagName("html")[0];
  useEffect(()=> {
    mainHtml.setAttribute("data-bs-theme",mode)
  },[mode]);
  return (
    <div className="d-flex justify-content-between shadow-sm">
      <nav
        className="navbar navbar-expand-sm"
        aria-label="Fifth navbar example"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            My <i className="bi bi-globe-europe-africa"></i> World
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              {user?.biz && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-cards">
                    My Cards
                  </NavLink>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              {user ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-out">
                    Sign Out
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-in">
                      Sign In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-up">
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <button className="btn" onClick={()=> setMode(mode==="light" ? "dark":"light")}>{mode==="light" ? <i className="bi bi-moon-fill"></i>:<i className="bi bi-brightness-high-fill"></i>}</button>
    </div>
  );
}

export default NavBar;
