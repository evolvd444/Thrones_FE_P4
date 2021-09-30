import React, { useState, useEffect } from "react";
import "../css/Landing.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Landing({ userLoggedIn , setUserLoggedIn}) {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState("none");

  const login = () => {

  }
  //   function login(username, password) {
  //     axios
  //       .get("https://bugtracker-api-v1.herokuapp.com/api/users")
  //       .then(function (res){
  //         const users = res.data
  //         for(let i = 0; i < users.length; i++){

  //           // check if username matches
  //           if(username === users[i].userName && password === users[i].password || username === users[i].email && password === users[i].password){
  //         //   if(true){
  //             //check that the password matches
  //             setLoggedIn(true)
  //             setRedirect('/dashboard')
  //             console.log(redirect)
  //             console.log('you logged in!')
  //             localStorage.setItem("loggedInUser", JSON.stringify(users[i].userName))
  //             localStorage.setItem("privLevel", JSON.stringify(users[i].privLevel))
  //             localStorage.setItem("lastLogin", JSON.stringify(Date.now()))
  //             localStorage.setItem("email", JSON.stringify(users[i].email))
  //             localStorage.setItem("profilePic", JSON.stringify(users[i].profilePic))
  //             localStorage.setItem("userId", JSON.stringify(users[i]._id))
  //             window.location.reload(false)
  //             break;
  //           } else {
  //             console.log(`Wrong info. Try again`)
  //           }
  //         }
  //         if(localStorage.getItem("loggedInUser").replace(/['"]+/g, '') == ""){
  //           setFailedLogin("block")
  //         }
  //         console.log('finished api call, now checking for errors')
  //       })
  //       .catch(function (error){
  //         console.log(error)
  //       })
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    
    // setUserLoggedIn('luke')
    //test \/ \/ \/
    localStorage.setItem('userLoggedIn' , true)
    setUserLoggedIn(usernameInput)
    resetFields();
  }

  function resetFields() {
    setPassword("");
    setUsernameInput("");
  }

  return (
    <div className="landing-page-container">
      <div className="login-form-container">
        <h1 className="login-text">Thrones</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            className="landing-page-username-input landing-text-input"
            placeholder="Username"
            onChange={(e) => setUsernameInput(e.target.value)}
            value={usernameInput}
          />

          <input
            required
            type="password"
            className="landing-page-password-input landing-text-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <input className="login-submit-btn" type="submit" value="Login" />

          <p className="login-failed" style={{ display: failedLogin }}>
            Incorrect username or password
          </p>
        </form>
      </div>
    </div>
  );
}

export default Landing;
