// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './css/App.css';
import { Route} from "react-router-dom";
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile/Profile.jsx'
import MainNav from './components/MainNav.jsx';
import About from './components/About/About.jsx';
import FooterNav from './components/Footer/footerNav.jsx';
import SignInAndSignUpPage from './components/signup-signin/signup-signin';
import AddThrone from './components/Add Throne/add-throne';
import './App.sass'

function App() {
  
  const [userLoggedIn , setUserLoggedIn] = useState(localStorage.getItem('userLoggedIn') || false)
  const [userList , setUserList] = useState('username')
  const [throneList , setThroneList] = useState(null)
  const [loading , setLoading] = useState(true)
  const throneAPIPath = 'https://thrones-be.herokuapp.com/api/profiles/'
  const thronePath = 'https://thrones-be.herokuapp.com/api/throne'
  

  function getThroneInfo(){
    fetch(throneAPIPath)
      .then(res => res.json())
      .then(res => {setUserList(res)})
      .catch(err => {console.error(err)})       
    fetch(thronePath)
      .then(res => res.json())
      .then(res => {setThroneList(res)})
      .catch(err => {console.error(err)})   
  }  
  useEffect(() => {
    getThroneInfo()
    setLoading(false)
  },[])

  if(!userLoggedIn && !loading){
      return (
        <div>
          <Route exact path = '/signup' component={SignInAndSignUpPage} />
          <Route exact path = '/'
            render={(props) => <Landing {...props}  userLoggedIn = {userLoggedIn} setUserLoggedIn = {setUserLoggedIn} userList = {userList}/>}
          />
          {/* <Landing userLoggedIn = {userLoggedIn} setUserLoggedIn = {setUserLoggedIn} userList = {userList}/> */}
        </div>
        
      )
  }
  else if(throneList != null){
    return (
      <div className="App">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        
        <MainNav setUserLoggedIn = {setUserLoggedIn} />
        <FooterNav setUserLoggedIn = {setUserLoggedIn} />
        {/* <Route exact path = {`/dashboard/${currentUser.id}`} */}
        <Route exact path = '/'
          render={(props) => <Dashboard {...props} throneList = {throneList} />}
        />
        <Route exact path = '/profile'
          render={(props) => <Profile {...props}/>}
        />
         <Route exact path = '/add-throne' component={AddThrone}/>
         <Route exact path = '/about' component={About} />
         
      </div>
    );
  }
  else return null
}

export default App;
