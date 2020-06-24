import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import "./Navbar.css";

const handleLogout = (props) => {
  logout().then((data) => {
    props.left(data.username);
    props.setUser(null);
  });
};

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="itemNavbar">
        {props.user && <div>Welcome, {props.user.username}</div>}
      </div>
      <div className="itemNavbar">
        <Link to="/">Home</Link>
      </div>
      {props.user ? (
        <>
          <div className="itemNavbar">
            <Link to="/" onClick={() => handleLogout(props)}>
              Logout
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="itemNavbar">
            <Link to="/login">Login</Link>
          </div>
          <div className="itemNavbar">
            <Link to="/signup">Signup</Link>
          </div>
        </>
      )}
    </nav>
  );
}
