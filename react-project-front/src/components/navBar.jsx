import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";

function NavBar() {
  const { user } = useAuth();
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light shadow-sm"
        aria-label="Fifth navbar example"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Chief<i class="bi bi-android2"></i>Droid
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
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-up-business">
                      Sign Up Business
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
