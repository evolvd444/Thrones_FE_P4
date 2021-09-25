import React, {useState , useEffect}from 'react';
import {Link} from 'react-router-dom'
export default function ThroneList() {
    return (
        <div className = 'nav'>
            <nav>
                <Link to = '/profile'>Profile</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/'>Home</Link>

                <span className = 'search-bar'>
                    Find My Throne:
                    <input 
                        type="text"  
                        placeholder = 'search'
                    />
                </span>
                
            </nav>
        </div>
    );
    
}