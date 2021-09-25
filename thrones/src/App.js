// import logo from './logo.svg';
import React from 'react'
import './css/App.css';
import Landing from './components/Landing';
import { Route } from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  
  return (
    <div className="App">

      <Route exact path = '/landing' 
        component = {Landing}
      />
      <Route exact path = '/dashboard'
        component = {Dashboard}
      />
      
    </div>
  );
}

export default App;
