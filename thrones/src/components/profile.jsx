import React, { useEffect, useState } from 'react';
import '../css/Profile.css'
import uploadIcon from '../images/upload-icon.png'
import submitIcon from '../images/submit-icon.png'
import deleteIcon from '../images/delete-icon.png'

export default function Profile({userList}){
    
    const [loading , setLoading] = useState(true)
 
    useEffect(() => {
        setLoading(false)
    },[loading])

    if(loading || userList == 'username'){
        return null
    }
    else{
        return (
            <div className = 'profile'>
                <div className = 'pfp-username'>
                    <img className = 'profile-picture' src={userList[0].user.profile_image} alt="" />
                    <p className = 'username'>{userList[0].user.username}</p>
                </div>
                <div class = 'row'>
                    <textarea class='col-6' rows="7" placeholder = 'Leave a review here:' style = {{resize: 'none' }}></textarea>  
                    <div class = 'col-6'>
                        <img class='col-2 row' src={uploadIcon} alt="" style = {{width: '5%', height: 'auto' , marginTop: '2%'}}/>
                        <img class='col-2 row' src = {deleteIcon} alt = "" style = {{width: '4%', height: 'auto' , marginTop: '2%'}}/>
                        <button class='row btn btn-primary' type = "submit" style = {{width: '10%' , marginTop: '2%'}}>Submit</button>
                    </div>
                    
                </div>
                
            </div>
        );
    }
    
}
