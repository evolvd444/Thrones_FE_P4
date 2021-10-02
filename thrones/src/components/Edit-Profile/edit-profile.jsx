import React, { useEffect, useState } from "react";
import "./edit-profile.scss";
// import uploadIcon from './images/upload-icon.png'
// import deleteIcon from './images/delete-icon.png'
import useScript from "../Hooks/useScript";

export default function EditProfile(props) {
 
  const [loading, setLoading] = useState(true);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) {
    return null;
  } else {
    return (
      <div id= "edit-account" >
       <div>
	<img src={currentUser.user.profile_image} class="avatar" alt= "" />
</div>
<form action="">
	<h1>Edit Account</h1>
	<label for="fullname">Full name</label>
	<input type="text" id="fullname"/>
	<label for="email">Email address</label>
	<input type="text" id="email"/>
	<label for="website">Website</label>
	<input type="text" id="website"/>
	<label for="bio">Bio</label>
	<textarea id="bio" rows="8"></textarea>
	<button type="submit">Update profile</button>
</form>
      </div>
    );
  }
}
