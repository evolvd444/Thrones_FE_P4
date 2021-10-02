import React, { useState, useEffect } from "react";
import "../css/Landing.css";
import axios from "axios";
import { Link } from "react-router-dom";
import thronesLogo from "../images/throne-logo.png";
function Landing({setUserLoggedIn , userList} ) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  
  const [failedLogin, setFailedLogin] = useState("none");
  



  const login = () => {
    userList.map( (e) => {
      //successful login
      if((e.user.username == username || e.user.email == username ) && (e.user.password == password)){
        localStorage.setItem('userLoggedIn' , true)
        localStorage.setItem('currentUser' , JSON.stringify(e))
        setUserLoggedIn(localStorage.getItem('userLoggedIn'))
        //setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
      }

      //unsuccessful login
      else{
        setFailedLogin("block")
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    login()
    resetFields();
  }

  function resetFields() {
    setPassword("");
    setusername("");
  }

  return (
    <div className="landing-page-container">
      <div className="login-form-container">
        <h1 className="login-text">Thrones</h1>
       
        <img id= "throne-login-logo" src= {thronesLogo} alt=" thronesLogo" />
        
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            className="landing-page-username-input landing-text-input"
            placeholder='Username'
            onChange={(e) => setusername(e.target.value)}
            value={username}
          />

          <input
            required
            type="password"
            className="landing-page-password-input landing-text-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input 
            className="login-submit-btn" 
            type="submit" 
            value="Login" 
          />
          {/* `/dashboard/${currentUser.id}` <Link to = '/' />*/}

          <p className="login-failed" style={{ display: failedLogin }}>
            Incorrect username or password
          </p>
        </form>
      </div>
    </div>
  );
}

export default Landing;