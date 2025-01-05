// signup; name , email, usename, password, conform password

import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState("login");
  const changeform = () => {
    setLogin(!login);
  };
  return (
    <>
      <div className="container">
        <div className={`form ${login ? "login" : "signup"}`}>
          <h1> {login ? "Login" : "Signup"} </h1>
          <div className="form-input">
            <div className="input">
              <input type="email" placeholder="Email" />
            </div>

            {!login && (
              <div className="input">
                <input type="password" placeholder="Create password" />
              </div>
            )}

            <div className="input">
              {" "}
              <input
                type="password"
                placeholder={login ? "Password" : "Confirm password "}
              />
            </div>

            <div>
              {login && (
                <a href="#" className="forget">
                  {" "}
                  Forget Password?
                </a>
              )}
            </div>

            <button className="btn">{login ? "Login" : "Signup"}</button>
          </div>

          <div className="dont">
            {" "}
            {login ? "Don't have an account?" : "Already have an account?"}
            <span onClick={changeform}>{login ? "Signup" : "Login"}</span>
          </div>

          <div>or</div>

          <div className="social-login">
            <button className="btn">Login with Google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
