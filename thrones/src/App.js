// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './css/App.css';
import { Route} from "react-router-dom";
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'
import MainNav from './components/MainNav.jsx';
import About from './components/About'
// console.log(location)

function App() {
  const [userList , setUserList] = useState('username')
  const [userLoggedIn , setUserLoggedIn] = useState(localStorage.getItem('userLoggedIn') || true)
  const throneAPIPath = 'https://thrones-be.herokuapp.com/api/thrones/'

  // useEffect(()=>{
  //   console.log(userLoggedIn)
  // },[userLoggedIn])

  function getUser(){
    fetch(throneAPIPath)
        .then(res => res.json())
        .then(res => {setUserList(res)})
        .catch(err => {console.error(err)})       
  }  
  useEffect(() => {
    getUser()
  },[])  
  
  if(!userLoggedIn){
    return <Landing userLoggedIn = {userLoggedIn} setUserLoggedIn = {setUserLoggedIn} userList={userList}/>
  }
  else{
    return (
      <div className="App">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

        <MainNav setUserLoggedIn = {setUserLoggedIn}/>
        <Route exact path = '/'
          render={(props) => <Dashboard {...props} userList={userList} />}
        />
        <Route exact path = '/profile'
          render={(props) => <Profile {...props} userList={userList} />}
          // throneAPIPath = {throneAPIPath}
        />
         <Route exact path = '/about' component={About} />
      </div>
    );
  }
  
}

export default App;
