import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

function Footer() {
  const { user } = useAuth();
  return (
    <footer className="container  border-top pt-2 pb-2 d-flex justify-content-between">
      <div className="mx-2">
        My <i className="bi bi-globe-europe-africa"></i> World &copy;{" "}
        {new Date().getFullYear()}
      </div>
      <div className="navbar d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <div>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </div>
          <div>
            {user?.biz && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/my-cards">
                  My Cards
                </NavLink>
              </li>
            )}
          </div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
