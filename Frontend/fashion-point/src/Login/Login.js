import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Login = () => {
    const [email,setEmail] = useState('');
    const[password,setPassword]= useState('');
    const navigate = new useNavigate()
    const {setLoggedInUser} =  useContext(UserContext);

    var loginuser = {
        "email":email,
        "password":password
    }
    const HandleLoginPage= async()=>{
        const loggedInData =   await axios.post("http://localhost:9092/logginuser", loginuser)
      const data =   await axios.post("http://localhost:9092/getloginuser",loginuser);
      if(data.data !== null && data.status == '200'){
        console.log(data.data)
        setLoggedInUser(data.data)
        navigate("/")
      }
   
    }
    return (<>                                                                                                                                                  
        <Header />
        <div className="register-container">
            <div className="register-sub-container">
                <div className="register-user-content">
                    <div className="register-content">
                        <h1>Sign In</h1>
                        <input type="email" placeholder="Enter Your Email Address" onChange={(e)=>{setEmail(e.target.value)}}/><br />
                        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
                        <button onClick={HandleLoginPage}>Sign In</button><br/><br/>
                        <span>Dont Have an account ? please <a href="/registeruser">Register</a></span>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </>)
}
export default Login;