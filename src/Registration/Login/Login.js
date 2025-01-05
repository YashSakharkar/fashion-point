// signup; name , email, usename, password, conform password

import GoogleIcon from "@mui/icons-material/Google";
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState("login");
  const changeform = () => {
    setLogin(!login);
  };
  return (
    <>
      <div className="registration-container">
        <div className={`form-container ${login ? "login" : "signup"}`}>
          {/* <h1> {login ? "Login" : "Signup"} </h1> */}
          

          <h1>{login ? <img src="./avatar.png" alt="avatar" className="avatar" /> : "Signup"}</h1>

          <div className="form-input">
            {!login && (
              <div className="input input-but">
                <input type="text" placeholder="Enter your name..." />
              </div>
            )}

            <div className="input input-but">
              <input type="email" placeholder="Email" />
            </div>

            {!login && (
              <div className="input input-but">
                <input type="text" placeholder="Enter your username..." />
              </div>
            )}

            {!login && (
              <div className="input input-but">
                <input type="password" placeholder="Create password" />
              </div>
            )}

            <div className="input input-but">
              <input
                type="password"
                placeholder={login ? "Password" : "Confirm password "}
              />
            </div>

            <div className="forget-container under">
              {login && (
                <a href="#" className="forget">
                  Forget Password?
                </a>
              )}
            </div>

            <button className="btn input-but hand">
              {login ? "SignIn" : "Signup"}
            </button>
          </div>

          <div className="dont">
            {login ? "Don't have an account? " : "Already have an account? "}
            <span onClick={changeform} className="hand under">
              {login ? " Signup" : "Login"}
            </span>
          </div>

          <div className="divider">
            <div className="left-right-dash"></div>or
            <div className="left-right-dash"></div>
          </div>

          <div className="social-login">
            <button className="btn input-but social hand">
              <GoogleIcon />
              SignIn with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
