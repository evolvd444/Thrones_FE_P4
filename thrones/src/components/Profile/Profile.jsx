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
          <main class="settingsPage profile my-md">
  <div class="container">
    <div class="layout">
      <div class="column column--1of3">
        <div class="card text-center">
          <div class="card__body dev">
            <a class="tag tag--pill tag--main settings__btn" href=" "><i class="im im-edit"></i>
              Edit</a>
            <img class="avatar avatar--xl dev__avatar" src={currentUser.user.profile_image} alt ="profleimage"/>
            <h2 class="dev__name">{}</h2>
            <p class="dev__title">{}</p>
            <p class="dev__location">Based in {currentUser.user.location}</p>


          </div>
        </div>
      </div>
      <div class="column column--2of3">
        <div class="devInfo">
          <h3 class="devInfo__title">About Me</h3>
          <p class="devInfo__about">{currentUser.user.short_intro}</p>
        </div>
        <div class="settings">
          <h3 class="settings__title">Skills</h3>
          <a class="tag tag--pill tag--sub settings__btn tag--lg" href=" "><i
              class="im im-plus"></i> Add Skill</a>
        </div>

        <table class="settings__table">
         
        </table>

        <div class="settings">
          <h3 class="settings__title">Projects</h3>
          <a class="tag tag--pill tag--sub settings__btn tag--lg" href=" "><i
              class="im im-plus"></i> Add Project</a>
        </div>

        <table class="settings__table">
         {/* forloop */}
          <tr>
            <td class="settings__thumbnail">
              <a href=" "><img src=" " alt="Project Thumbnail" /></a>
            </td>
            <td class="settings__tableInfo">
              <a href=" ">{currentUser.owner}</a>
              <p>{}</p>
            </td>
            <td class="settings__tableActions">
              <a class="tag tag--pill tag--main settings__btn" href=" "><i
                  class="im im-edit"></i> Edit</a>
              <a class="tag tag--pill tag--main settings__btn"
                href=" "><i class="im im-x-mark-circle-o"></i>
                Delete</a>
            </td>
          </tr>
          {/* endforloop */}

        </table>
      </div>
    </div>
  </div>
</main>

      </div>
    );
  }
}
