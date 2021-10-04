import React, { useEffect, useState } from "react";
import "./Profile.scss";
// import uploadIcon from './images/upload-icon.png'
// import deleteIcon from './images/delete-icon.png'
import useScript from "../Hooks/useScript";

export default function Profile(props) {
 
  const [loading, setLoading] = useState(true);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) {
    return null;
  } else {
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
        <td><img src= "  " alt=""/></td>
        <td>profile.location|slice:"150"</td>
        <td>profile.short_intro|slice:"60"</td>
        <td>profile.created</td>
    </tr>
</table>
<br/>
<br/>
<h1>Thrones</h1>
<table class = "tables">
    <tr>
        <th>ID</th>
        <th>User</th>
        <th>Bathroom</th>
        <th>Images</th>
        <th>Reviews</th>
        <th>Created</th>
        <th></th>
    </tr>
   {/* //forloop */}
    <tr>
        <td>"id": "e0882cd3-371b-490b-a319-957903ff2be7"</td>
        <td>currentuser.name</td>
        <td>"owner": "Publix",</td>
        <td><img  src=" " alt=""/></td>
        <td>currentUser.reviews</td>
        <td>bathroom.created</td>
       
    </tr>
    
</table>
<div class ="crud-buttons">  
        <button class ="buttonss" ><a href="{% url 'update-throne' bathroom.id %}">Edit</a></button>
        <button class ="buttonss" ><a href="{% url 'delete-throne' bathroom.id %}">Delete</a></button>
        <button class ="buttonss" ><a href="{% url 'bathroom' bathroom.id %}">View</a></button>

</div>
      </div>
    );
  }
}
