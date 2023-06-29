import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useEffect, useState } from "react";

function NavBar() {
  const { user } = useAuth();
  const [mode, setMode] = useState(localStorage.getItem("screenMode"));
  const mainHtml = document.getElementsByTagName("html")[0];

  useEffect(() => {
    mainHtml.setAttribute("data-bs-theme", mode);
    localStorage.setItem("screenMode", mode);
  }, [mode]);

  return (
    <div className="bg-secondary-subtle border-bottom">
      <div className="d-flex row mx-5 ">
        <nav
          className="navbar navbar-expand-sm"
          aria-label="Fifth navbar example"
        >
          <Link className="navbar-brand mx-3" to="/">
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
            <div className="ms-auto">
              <ul className="navbar-nav">
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
          {user ? (
            <div className="ms-3">
              <i className="bi bi-person-fill-check" style={{fontSize:"1.5rem"}}></i>
            </div>
          ) : (
            <i className="bi bi-person-fill-x" style={{fontSize:"1.5rem"}}></i>
          )}
          <button
            className="btn ms-auto w-auto" style={{fontSize:"1.2rem"}}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? (
              <i className="bi bi-moon-fill"></i>
            ) : (
              <i className="bi bi-brightness-high-fill"></i>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
