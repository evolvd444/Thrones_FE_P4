import React, {useState , useEffect}from 'react';
import {Link} from 'react-router-dom'
import '../css/MainNav.css'
export default function ThroneList({setUserLoggedIn}) {

    const logout = () => {
        setUserLoggedIn(false)
        localStorage.removeItem('userLoggedIn' , true)
        localStorage.removeItem('currentUser' , '')
    }
    return (
        <div className = 'main-nav'>
            <nav class = 'navbar navbar-expand navbar-light bg-light'>
                <img id= "mobileThrone" className='throne-logo' src="https://www.svgrepo.com/show/246760/throne.svg" alt="" />
                <span class="navbar-brand">Thrones</span>
                <div class="navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link  to = '/' class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to = '/profile' class="nav-link">Profile</Link>
                        </li>
                        <li class="nav-item">
                            <Link to = '/about' class="nav-link">About</Link>
                        </li>     
                        <li class="nav-item">
                            <Link  to = '/add-throne' class="nav-link">Add Throne</Link>
                        </li>
                        <li>
                            <Link to = '/'><button onClick = {logout}>logout</button></Link>
                        </li>                
                    </ul>     
                </div>
                {/* <span class = 'col-5'className = 'searchbar-label' class="nav-item">Find a throne: </span>   
                <form id= "hideform" class = 'col-1.'>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form> */}
               
            </nav>
        </div>
    );
    
}