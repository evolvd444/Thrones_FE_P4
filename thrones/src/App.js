// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './css/App.css';
import { Route} from "react-router-dom";
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile/Profile.jsx'
import MainNav from './components/MainNav.jsx';
import About from './components/About/About.jsx';
import SignInAndSignUpPage from './components/signup-signin/signup-signin';
import './App.sass'

// console.log(location)

function App() {
  
  const [userLoggedIn , setUserLoggedIn] = useState(localStorage.getItem('userLoggedIn') || false)
  //const [currentUser , setCurrentUser] = useState(null)
  const throneAPIPath = 'https://thrones-be.herokuapp.com/api/thrones/'
  const [userList , setUserList] = useState('username')

  function getUser(){
    fetch(throneAPIPath)
        .then(res => res.json())
        .then(res => {setUserList(res)})
        .catch(err => {console.error(err)})       
  }  
  useEffect(() => {
    getUser()
  },[])

  // useEffect(()=>{
  //   console.log(userLoggedIn)
  // },[userLoggedIn])

  if(!userLoggedIn && userList != 'username'){
    return <Landing userLoggedIn = {userLoggedIn} setUserLoggedIn = {setUserLoggedIn} userList = {userList}/> 
  }
  else{
    return (
      <div className="App">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        
        <MainNav setUserLoggedIn = {setUserLoggedIn} />
        {/* <Route exact path = {`/dashboard/${currentUser.id}`} */}
        <Route exact path = '/'
          render={(props) => <Dashboard {...props} />}
        />
        <Route exact path = '/profile'
          render={(props) => <Profile {...props}/>}
        />
         <Route exact path = '/about' component={About} />
         <Route exact path = '/signup' component={SignInAndSignUpPage} />
      </div>
    );
  }
  
}

export default App;
