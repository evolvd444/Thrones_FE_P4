// import logo from './logo.svg';
import React, { useState } from 'react'
import './css/App.css';
import { Route} from "react-router-dom";
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import MainNav from './components/MainNav.jsx';


// console.log(location)

function App() {
  //const [userLoggedIn , setUserLoggedIn] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(() => {
    const saved = localStorage.getItem("userLoggedIn");
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  console.log(userLoggedIn)
  if(userLoggedIn == ''){
    return <Landing userLoggedIn = {userLoggedIn} setUserLoggedIn = {setUserLoggedIn}/>
  }
  else{
    return (
      <div className="App">
          
        <MainNav/>
        <Route exact path = '/'
          component = {Dashboard}
        />
        <Route exact path = '/profile'
          component = {Profile}
        />
      </div>
    );
  }
  
}

export default App;
