import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

function Footer() {
  const { user } = useAuth();
  return (
    <footer className="border-top pt-2 pb-2 d-flex flex-column bg-secondary-subtle">
      <div className="mx-auto">
        My <i className="bi bi-globe-europe-africa"></i> World &copy;{" "}
        {new Date().getFullYear()}
      </div>
      <div className="navbar d-flex justify-content-center">
        <ul className="navbar-nav d-flex flex-row gap-2">
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
    </footer>
  );
}

export default Footer;
