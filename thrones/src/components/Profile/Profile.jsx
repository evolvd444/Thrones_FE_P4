import React, { useEffect, useState } from "react";
import "./Profile.scss";
import useScript from "../Hooks/useScript";
import axios from 'axios'

export default function Profile(props) {
  const [loading, setLoading] = useState(true);
  const [userReviews , setUserReviews] = useState([])
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const getUsersReviews = () => {
    setUserReviews(
      props.throneList.filter(e => {
        return e.user == currentUser.id
      })
    )
  }
  const deleteThrone = () => {
    axios.delete(`https://thrones-be.herokuapp.com/api/thrones/${userReviews[0].id}/`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error('uh oh')
      })
  }

  useEffect(() => {
    setLoading(false);
    getUsersReviews()
    
  }, [loading]);

  if (loading) {
    return null;
  } else {
    console.log('User reviews: '+ JSON.stringify(currentUser))
    // console.log(currentUser.user)
    return (
      <div id= "profile" >
      <h1>User Profile</h1>
      <table class = "tables">
          <tr>
              <th>Username</th>
              <th>name</th>
              <th>gender</th>
              <th>Profile_Photo</th>
              <th>Location</th>
              <th>short_intro</th>
              <th>Created</th>
          </tr>
          
          <tr>
              <td>profile.username</td>
              <td>profile.name</td>
              <td>profile.gender</td>
              <td><img class = 'avatar' src= "  " alt=""/></td>
              <td>profile.location|slice:"150"</td>
              <td>profile.short_intro|slice:"60"</td>
              <td>profile.created</td>
          </tr>
      </table>
      <br/>
      <br/>
      <h1>Created Thrones</h1>
      <table class = "tables">
          <tr>
              
              <th>Author: </th>
              <th>Bathroom: </th>
              <th>Images: </th>
              <th>Reviews: </th>
              <th>Created: </th>
              {/* <th></th> */}
          </tr>
        {/* //forloop */}
          <tr>
              <td>{currentUser.email}</td>
              {/* <td>{userReviews[0].owner}</td>
              <td><img class = 'avatar' src={userReviews[0].image} alt=""/></td>
              <td>{userReviews[0].reviews}</td>
              <td>{userReviews[0].created}</td> */}
            
          </tr>
          
      </table>
        <div class ="crud-buttons">  
                <button class ="buttonss" ><a href="/update-throne">Edit</a></button>
                <button class ="buttonss" onClick = {deleteThrone}>Delete</button>
                <button class ="buttonss" ><a href="/bathroom}">View</a></button>
        </div>
      </div>
    );
  }
}
