import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./RegisterUser.css"
import axios from "axios";
import { data } from "react-router-dom";

const RegisterUser = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    var setRegisterUser = {
        "name":name,
        "email":email,
        "password":password,
        "confirmpassword":confirmPassword
    }
 const HandleRegisterUser =async()=>{
    console.log(setRegisterUser)
  const data =   await axios.post("http://localhost:9092/registeruser",setRegisterUser)
  console.log(data)
   
 }
    return (<>
        <Header />
        <div className="register-container">
            <div className="register-sub-container">
                <div className="register-user-content">
                    <div className="register-content">
                        <h1>Sign Up</h1>
                        <input type="text" placeholder="Enter Your Full Name" onChange={(e)=>{setName(e.target.value)}}/><br />
                        <input type="email" placeholder="Enter Your Email Address" onChange={(e)=>{setEmail(e.target.value)}}/><br />
                        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
                        <input type="password" placeholder="Confirm Password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/><br />
                        <button onClick={HandleRegisterUser}>Sign Up</button><br/><br/>
                        <span>Already Have an account ? please <a href="/login">Login</a></span>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </>)
}
export default RegisterUser;