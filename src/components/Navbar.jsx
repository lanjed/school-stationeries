// components/Navbar.jsx
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { cartItems } = useCart();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info px-4">
      <NavLink className="navbar-brand text-white fw-bold" to="/">
        School Stationeries
      </NavLink>

      {/* Mobile toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">

          {/* Always visible */}
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-dark text-decoration-underline">
              Stationeries
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/addstationeries" className="nav-link text-dark text-decoration-underline">
              Add Stationeries
            </NavLink>
          </li>

          {/* Conditional Rendering */}
          {user ? (
            <>
              {/* Username */}
              <li className="nav-item">
                <span className="nav-link text-success fw-bold">
                  👋 {user.username}
                </span>
              </li>

              {/* Logout */}
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link text-dark text-decoration-underline">
                  Signup
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/signin" className="nav-link text-dark text-decoration-underline">
                  Signin
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link text-dark text-decoration-underline">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactus" className="nav-link text-dark text-decoration-underline">
                  Contact Us
                </NavLink>
              </li>
            </>
          )}

          {/* Cart Icon stays outside the collapsible menu */}
            <div className="cart-icon ms-auto">
              <Link className="nav-link link text-dark text-decoration-underline" to="/cart">
                Cart 🛒 <span>({cartItems.length})</span>
              </Link>
            </div>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;