import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

function OldFooter() {
  const { user } = useAuth();
  return (
    <footer className="border-top pt-2 pb-2 d-flex row">
      <div className="mx-2">
        My <i className="bi bi-globe-europe-africa"></i> World
      </div>
      <div className="mx-2">&copy;</div>
      <div>{new Date().getFullYear()}</div>
      <div>
        <div className="navbar">
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
        </div>
      </div>
    </footer>
  );
}

export default OldFooter;
