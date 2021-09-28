import React, { useEffect, useState } from 'react';
import '../css/Profile.css'
import uploadIcon from '../images/upload-icon.png'
import submitIcon from '../images/submit-icon.png'
import deleteIcon from '../images/delete-icon.png'
import axios from "axios"

export default function Profile(){
    const [userList , setUserList] = useState('username')
    const [loading , setLoading] = useState(true)

    function displayUser(){
        
        fetch("http://localhost:8000/api/thrones/")
            .then(res => res.json())
            .then(res => {
                setUserList(res)
            })
            .catch(err => {
                console.error(err)
            })        
    }    
    useEffect(() => {
        displayUser()
        setLoading(false)
    },[loading])

    if(loading){
        //console.log(userList)
        return null
    }
    else{
        return (
            <div className = 'profile'>
                <div className = 'pfp-username'>
                    {/* <img className = 'pfp' src={userList[0].featured_image} alt="" />
                    <p className = 'username'>{userList[0].owner}</p> */}
                </div>
                <div class = 'row'>
                    <textarea class='col-6' rows="7" placeholder = 'Leave a review here:' style = {{resize: 'none' }}></textarea>  
                    <div class = 'col-6'>
                        <img class='col-2 row' src={uploadIcon} alt="" style = {{width: '5%', height: 'auto' , marginTop: '2%'}}/>
                        <img class='col-2 row' src = {deleteIcon} alt = "" style = {{width: '4%', height: 'auto' , marginTop: '2%'}}/>
                        <button class='col-2 row btn btn-primary' type = "submit" style = {{width: '10%' , marginTop: '2%'}}>Submit</button>
                    </div>
                    
                </div>
                
            </div>
        );
    }
    
}
