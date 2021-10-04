import React from 'react';
import { Link } from 'react-router-dom'
import searchIcon from './searchIcon.png'
import profile from './Profile-icon.png'
import plusIcon from './plusIcon.png'
import './footerNav.css'


function FooterNav(props) {
    return (
        <div className = "footerContainer">
            <div className = "Footer" id = "Nav">
             <Link to = '/'className= "footerIcons" id="searchIcon"> <img src= {searchIcon} alt="Trophies"/> </Link><br></br>
             <Link to = '/add-throne' className= "footerIcons" id= "createIconFoot"><img src= { plusIcon } alt="Create NFT"/></Link><br></br>
             <Link to = '/about' className= "footerIcons" id= "aboutIconFoot"><img src= "https://visualpharm.com/assets/454/About-595b40b65ba036ed117d42d0.svg" alt="About"/></Link><br></br>
             <Link to = '/profile' className= "footerIcons" id= "loginIconFoot"><img src = { profile } alt= ""/></Link>     
        </div>
        </div>
        
    );
}

export default FooterNav;