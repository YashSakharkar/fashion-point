import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Login.css"

const Login = () => {
    return (<>
        <Header />
        <div className="register-container">
            <div className="register-sub-container">
                <div className="register-user-content">
                    <div className="register-content">
                        <h1>Sign In</h1>
                        <input type="email" placeholder="Enter Your Email Address" /><br />
                        <input type="password" placeholder="Password" /><br />
                        <button>Sign In</button><br/><br/>
                        <span>Dont Have an account ? please <a href="/registeruser">Register</a></span>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </>)
}
export default Login;