import React from "react";
import { Alert } from "react-bootstrap";
//import { signup } from "../services/auth";
import useAuth from "../hooks/useAuth";
import "./Login.css";

const initialState = {
  username: "",
  password: "",
  message: "",
};

export default function Signup({ setUser, history, join }) {
  const { username, password, message, handleSignup, handleChange } = useAuth(
    initialState,
    setUser,
    history,
    join
  );

  return (
    <div className="containerLogin">
      <div className="loginForm">
        <form onSubmit={handleSignup}>
          <div className="formGroup">
            <h2>Welcome!</h2>
            <h6>Create an account</h6>
            <label htmlFor="username" />
            <h3> Username</h3>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              id="username"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password" />
            <h3>Password</h3>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              id="password"
            />
          </div>
          {message && <Alert variant="danger">{message}</Alert>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
