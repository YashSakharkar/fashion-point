
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import React, { useState } from "react";
import "./Login.css";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const Login = () => {
  const [login, setLogin] = useState("login");
  const changeform = () => {
    setLogin(!login);
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <Header/>
      <div className="registration-container">
        <div className={`form-container ${login ? " login" : " signup"}`}>

          <h1>{login ? <img src="./avatar.png" alt="avatar" className="avatar" /> : "Signup"}</h1>

          <div className="form-input">
            {!login && (
              <div className="input input-but">
                <input type="text" placeholder="Enter your name..." />
              </div>
            )}
            <div className="input input-but">
              <input type="email" placeholder="Email" required />
            </div>

            {!login && (
              <div className="input input-but">
                <input type="text" placeholder="Enter your username..." />
              </div>
            )}
            {!login && (

              <div className="input input-but" style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={login ? "Password" : " Password"}
                  style={{ paddingRight: "40px" }} // Add space for the eye button
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
            )}
            <div className="input input-but" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder={login ? "Password" : "Confirm password"}
                style={{ paddingRight: "40px" }} // Add space for the eye button
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",

                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
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
            <span onClick={changeform} className="hand under" >
              {login ? "Signup" : "  Login"}
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
      <Footer/>
    </>
  );
};

export default Login;
